import Api from '../../Services/index.js';

export const role = {
    namespaced: true,
    state: {
        role: []
    },
    getters: {
        GET_ROLE(state, payload) {
            return state.role;
        },
    },
    mutations: {
        SET_ITEM_ROLE(state, payload) {
            state.role = payload;
        },
        SET_PUSH_ROLE(state, payload) {
            state.role.push(payload);
        },
        SET_UPDATE_ROLE(state, payload) {
            const position_array  = state.role.findIndex((element) => {
                                        return  element.id == payload.id
                                    })
            if (position_array !== undefined || position_array !== -1) 
            {
                state.role.splice(position_array, 1, payload);
            }
        },
    },
    actions: {
        async INDEX({ commit}, payload) {
            try {
                const response = await Api.get("api/rol"); 
                
                commit("SET_ITEM_ROLE", response.data.data);            
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit}, payload) {
            try {
                const response = await Api.post("api/rol/store", payload); 
                
                commit("SET_PUSH_ROLE", response.data.data);            
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async UPDATED({ commit}, payload) {
            try {
                const response = await Api.put(`api/rol/${payload.id}`, payload);   
                commit("SET_UPDATE_ROLE", response.data.data);            
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
};
