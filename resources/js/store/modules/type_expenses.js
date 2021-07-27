import Api from '../../Services/index.js';

export const type_expenses = {
    namespaced: true,
    state: {
        type_expense: []
    },
    getters: {
        GET_TYPE_EXPENSES(state, payload) {
            return state.type_expense;
        }
    },
    mutations: {
        SET_ITEM_TYPE_EXPENSES(state, payload) {
            state.type_expense = payload;
        },
        SET_PUSH_TYPE_EXPENSES(state, payload) {
            state.type_expense.push(payload);
        },
        SET_UPDATE_TYPE_EXPENSES(state, payload) {
            const position_array = state.type_expense.findIndex((element) => {
                return element.id == payload.id
            })
            if (position_array !== undefined || position_array !== -1) {
                state.type_expense.splice(position_array, 1, payload);
            }
        },

        SET_DELETE_TYPE_EXPENSES(state, payload) {
            state.type_expense.splice(payload.position_array, 1);
        },
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/type_expense");
                commit("SET_ITEM_TYPE_EXPENSES", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async REGISTER({ commit }, payload) {
            try {
                const response = await Api.post("api/type_expense/store", payload);
                commit("SET_PUSH_TYPE_EXPENSES", response.data.data);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async UPDATED({ commit }, payload) {
            try {
                const response = await Api.put(`api/type_expense/${payload.id}`, payload);
                commit("SET_UPDATE_TYPE_EXPENSES", response.data.data);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async DELETE({ commit }, payload) {
            try {
                const response = await Api.delete(`api/type_expense/${payload.id}`);
                commit('SET_DELETE_TYPE_EXPENSES', payload.position_array);
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
