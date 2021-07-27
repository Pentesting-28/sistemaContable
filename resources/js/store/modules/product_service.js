import Api from '../../Services/index.js';

export const product_service = {
    namespaced: true,
    state: {
        product_service: []
    },
    getters: {
        GET_PRODUCT_SERVICE(state, payload) {
            return state.product_service;
        }
    },
    mutations: {
        SET_ITEM_PRODUCT_SERVICE(state, payload) {
            state.product_service = payload;
        },
        SET_PUSH_PRODUCT_SERVICE(state, payload) {
            state.product_service.push(payload);
        },
        SET_UPDATE_PRODUCT_SERVICE(state, payload) {
            const position_array = state.product_service.findIndex((element) => {
                return element.id == payload.id
            })
            if (position_array !== undefined || position_array !== -1) {
                state.product_service.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_PRODUCT_SERVICES(state, payload) {
            state.product_service.splice(payload.position_array, 1);
        },
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/product_or_service");
                commit("SET_ITEM_PRODUCT_SERVICE", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/product_or_service/store", payload);
                commit("SET_PUSH_PRODUCT_SERVICE", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/product_or_service/${payload.id}`, payload);
                commit("SET_UPDATE_PRODUCT_SERVICE", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/product_or_service/${payload.id}`);
                commit('SET_DELETE_PRODUCT_SERVICES', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
