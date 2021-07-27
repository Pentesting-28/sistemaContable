import Api from '../../Services/index.js';

export const reports = {
    namespaced: true,
    state: {
        donation: [],
        total_cost: 0,
        invoices:[],
        expenses:[],
    },
    getters: {
        GET_DONATION(state, payload) {
            return state.donation;
        },
        GET_TOTAL_COST(state, payload){
            return state.total_cost;
        },
        GET_ENVOICES(state, payload){
            return state.invoices;
        },
        GET_EXPENSES(state, payload){
            return state.expenses;
        }
    },
    mutations: {
        SET_ITEM_DONATION(state, payload) {
            state.donation = payload;
        },
        SET_PUSH_DONATION(state, payload) {
            state.donation.push(payload);
        },
        SET_UPDATE_DONATION(state, payload) {
            const position_array = state.donation.findIndex((element) => {
                return element.id == payload.id
            })
            
            if (position_array !== undefined || position_array !== -1) {
                state.donation.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_DONATIONS(state, payload) {
            state.donation.splice(payload.position_array, 1);
        },
        SET_TOTAL_COST(state, payload) {
            if(payload.opc == 2 && payload.report.length > 0){
                state.total_cost = payload.report.reduce((acum, x) => x.quantity + acum, 0);
            }
            if(payload.opc == 1 && payload.report.length > 0){
                state.total_cost = payload.report.reduce((acum, x) => x.amount + acum, 0);
            }
        },
        SET_INVOICES(state, payload){
            state.invoices = payload;
        },
        SET_EXPENSES(state, payload){
            state.expenses = payload;
        }
    },
    actions: {
        async FILTER_INVOICE_EXPENSES({ commit }, payload) {
            try {
                const response = await Api.get(`api/filter/${payload.opc}/${payload.ini}/${payload.end}/${payload.donation_id}/${payload.product_service_id}/${payload.type_expense_id}/${payload.export}`);
                // commit("SET_ITEM_DONATION", response.data.data);
                if(payload.opc == 2){
                    commit("SET_INVOICES", response.data.data);
                }
                else{
                    commit("SET_EXPENSES", response.data.data);
                }
                 
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async FILTER_INVOICE_EXPENSES_MONTHLY({ commit }, payload) {
            try {
                const response = await Api.get(`api/filter/${payload.opc}/${payload.ini}/${payload.end}/${payload.donation_id}/${payload.product_service_id}/${payload.type_expense_id}/${payload.export}`);
                // commit("SET_ITEM_DONATION", response.data.data);
                const data = {
                    opc : payload.opc,
                    report: response.data.data
                };
                
                commit("SET_TOTAL_COST", data);

                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/donation/store", payload);
                commit("SET_PUSH_DONATION", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/donation/${payload.id}`, payload);
                commit("SET_UPDATE_DONATION", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/donation/${payload.id}`);
                commit('SET_DELETE_DONATIONS', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
