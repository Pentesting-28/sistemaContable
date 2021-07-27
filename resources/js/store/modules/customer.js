import Api from '../../Services/index.js';

export const customer = {
    namespaced: true,
    state: {
        customers: [],
        customer_search: {},
        type_payment: []
    },
    getters: {
        GET_CUSTOMERS(state, payload) {
            return state.customers;
        },
        GET_CUSTOMER_SEARCH(state, payload) {
            return state.customer_search;
        },
        GET_TYPE_PAYMENT(state, payload) {
            return state.type_payment;
        },
    },
    mutations: {
        SET_ITEM_CUSTOMERS(state, payload) {
            state.customers = payload;
        },
        SET_PUSH_CUSTOMER(state, payload) {
            state.customers.push(payload);
        },
        SET_TYPE_PAYMENT(state, payload) {
            state.type_payment = payload;
        },
        SET_UPDATE_CUSTOMER(state, payload) {
            const position_array = state.customers.findIndex((element) => {
                return element.id == payload.id
            })
            
            if (position_array !== undefined || position_array !== -1) {
                state.customers.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_CUSTOMER(state, payload) {
            state.customers.splice(payload.position_array, 1);
        },

        SET_SEARCH_CUSTOMER(state, payload) {
            if (payload == null) {
                state.customer_search = {};
            } else {
                state.customer_search = payload;
            }
        },
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/client");
                commit("SET_ITEM_CUSTOMERS", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/client/store", payload);
                
                commit("SET_PUSH_CUSTOMER", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/client/${payload.id}`, payload);
                commit("SET_UPDATE_CUSTOMER", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/client/${payload.id}`);
                commit('SET_DELETE_CUSTOMER', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async SEARCH_CLIENT({ commit }, payload) {
            try {
                const response = await Api.post("api/client/search", payload);
                
                commit("SET_SEARCH_CUSTOMER", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async TYPE_PAYMENT({ commit }, payload) {
            try {
                const response = await Api.get("api/type_payment", payload);
                
                commit("SET_TYPE_PAYMENT", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },


    }
};
