import Api from '../../Services/index.js';

export const donations = {
    namespaced: true,
    state: {
        donation: []
    },
    getters: {
        GET_DONATION(state, payload) {
            return state.donation;
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
    },
    actions: {
        async INDEX({ commit }, payload) {
            try {
                const response = await Api.get("api/donation");
                commit("SET_ITEM_DONATION", response.data.data);
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
