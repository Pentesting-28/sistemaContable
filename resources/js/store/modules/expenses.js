import Api from '../../Services/index.js';

export const expenses = {
    namespaced: true,
    state: {
        expense: []
    },
    getters: {
        GET_EXPENSES(state, payload) {
            return state.expense;
        }
    },
    mutations: {
        SET_ITEM_EXPENSES(state, payload) {
            state.expense = payload;
        },
        SET_PUSH_EXPENSES(state, payload) {
            state.expense.push(payload);
        },
        SET_UPDATE_EXPENSES(state, payload) {
            const position_array = state.expense.findIndex((element) => {
                return element.id == payload.id
            })
            if (position_array !== undefined || position_array !== -1) {
                state.expense.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_EPENSES(state, payload) {
            state.expense.splice(payload.position_array, 1);
        },
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/expense");
                commit("SET_ITEM_EXPENSES", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/expense/store", payload);
                commit("SET_PUSH_EXPENSES", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/expense/${payload.id}`, payload);
                commit("SET_UPDATE_EXPENSES", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/expense/${payload.id}`);
                commit('SET_DELETE_EPENSES', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
