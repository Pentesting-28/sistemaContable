import Api from '../../Services/index.js';

export const user = {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        GET_USERS(state, payload) {
            return state.users;
        },
    },
    mutations: {
        SET_ITEM_USERS(state, payload) {
            state.users = payload;
        },
        SET_PUSH_USER(state, payload) {
            state.users.push(payload);
        },
        SET_UPDATE_USER(state, payload) {
            const position_array = state.users.findIndex((element) => {
                return element.id == payload.id
            })
            console.log('position_array', position_array)
            if (position_array !== undefined || position_array !== -1) {
                state.users.splice(position_array, 1, payload);
            }
        },
        SET_DELETE_USER(state, payload) {
            state.users.splice(payload.position_array, 1);
        }
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/users");
                commit("SET_ITEM_USERS", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/auth/signup", payload);
                // console.log('***',response.data.data)
                commit("SET_PUSH_USER", response.data.data.user);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/users/${payload.id}`, payload);
                commit("SET_UPDATE_USER", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/users/${payload.id}`);
                commit('SET_DELETE_USER', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
