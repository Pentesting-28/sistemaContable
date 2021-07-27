import Api from '../../Services/index.js';
import ApiFile from '../../Services/file.js';

export const auth = {
    namespaced: true,
    state: {
        token: null,
        user: {}
    },
    getters: {
        IS_AUTHENTICATED(state) {
            return state.token == null ? false : true;
        },
        USER_INFO(state) {
            return state.user;
        }

    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_USER(state, payload) {
            if (Object.keys(payload).length > 0) {
                state.user = payload;
                sessionStorage.setItem("user", JSON.stringify(payload));
            }
        },
        SET_CLEAR(state) {
            state.token = null;
        },
    },
    actions: {
        async LOGIN_USER({ commit }, payload) {
            try {
                const response = await Api.post('/api/auth/login', payload);
                Api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data.token}`;

                ApiFile.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data.token}`;

                commit("SET_TOKEN", response.data.data.token);
                commit("SET_USER", response.data.data.user);
                localStorage.setItem("token", response.data.data.token)
                
                localStorage.setItem("role_id", response.data.data.user.role[0].id)
                let permission = response.data.data.user.role[0].permissions.map((index, elem) => {
                    return index.id;
                })
                localStorage.setItem("permission_id", permission.toString())
                
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async TRY_AUTO_LOGIN({ commit, dispatch }, payload) {
            try {
                const token = localStorage.getItem("token");
                if (token !== null) {

                    Api.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${token}`;

                    ApiFile.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${token}`;
                    
                    commit("SET_TOKEN", token);

                    const response = await dispatch("ME");
                    

                    return true;
                }
                
               
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async LOGOUT({ commit, dispatch }, payload) {
            try {
                const response = await Api.post("api/auth/logout");
                if ((response.status = 200)) {
                    delete Api.defaults.headers.common["Authorization"];
                    localStorage.clear();
                    commit("SET_CLEAR", null);
                }
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async ME({ commit, dispatch }, payload) {
            try {
                const response = await Api.get("api/auth/info");    
                commit("SET_USER", response.data.data.user);            
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async RESET_PASSWORD({ commit }, payload) {
            try {
                const response = await Api.post("api/auth/reset_password", payload);          
                return response.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
};
