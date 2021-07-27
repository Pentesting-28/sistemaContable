import Api from '../../Services/index.js';

export const permission = {
    namespaced: true,
    state: {
        permission: []
    },
    getters: {
        GET_PERMISSION(state, payload) {
            return state.permission;
        },
    },
    mutations: {
        SET_ITEM_PERMISSION(state, payload) {
            state.permission = payload.filter((index) => {
                return index.id > 1;
            });
        },
    },
    actions: {
        async INDEX({ commit}, payload) {
            try {
                const response = await Api.get("api/permission"); 
                commit("SET_ITEM_PERMISSION", response.data.data);            
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
};
