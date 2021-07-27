import Api from '../../Services/index.js';

export const invoice = {
    namespaced: true,
    state: {
        invoice: []
    },
    getters: {
        GET_INVOICE(state, payload) {
            return state.invoice;
        }
    },
    mutations: {
        SET_ITEM_INVOICE(state, payload) {
            state.invoice = payload;
        },
        SET_PUSH_INVOICE(state, payload) {
            state.invoice.push(payload);
        },
        SET_UPDATE_INVOICE(state, payload) {
            const position_array = state.invoice.findIndex((element) => {
                return element.id == payload.id
            })
            if (position_array !== undefined || position_array !== -1) {
                state.invoice.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_INVOICES(state, payload) {
            state.invoice.splice(payload.position_array, 1);
        },
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/invoice");
                commit("SET_ITEM_INVOICE", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async GET_ONE_INVOICE({ commit }, payload) {
            try {
                const response = await Api.get("api/invoice/" + payload.id);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/invoice/store", payload);
                commit("SET_PUSH_INVOICE", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/invoice/${payload[0].id}`, payload);
                commit("SET_UPDATE_INVOICE", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/invoice/${payload.id}`);
                // commit('SET_DELETE_INVOICES', payload.position_array);
                commit("SET_UPDATE_INVOICE", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async SEND_MAIL({ commit }, payload) {
            try {
                const response = await Api.get(`api/invoice/${payload.id}/send`);
                
                return response.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async PDF({ commit }, payload) {
            try {
                const response = await Api.get(`api/invoice/${payload.id}/download`);
                
                return response.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
};
