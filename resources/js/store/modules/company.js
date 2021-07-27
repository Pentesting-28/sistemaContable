import Api from '../../Services/index.js';
import ApiFile from '../../Services/file.js';

export const company = {
    namespaced: true,
    state: {
        information: []
    },
    getters: {
        GET_COMPANY(state, payload) {
            return state.information;
        },
    },
    mutations: {
        SET_ITEM(state, payload) {
            if (payload.length > 0) {
                state.information = payload;
            }
        },
        SET_PUSH_ITEM(state, payload) {
               state.information.push(payload);
        },
        SET_UPDATE(state, payload) {
            state.information.pop()
            state.information.push(payload);
        }
    },
    actions: {
        async INDEX({ commit}, payload) {
            try {
                const response = await Api.get("api/company");  
                commit("SET_ITEM", response.data.data);           
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async REGISTER({ commit}, payload) {
            try {
                const response = await ApiFile.post("api/company/store", payload.formData);  
                
                commit("SET_PUSH_ITEM", response.data.data);           
                return response.data.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED({ commit}, payload) {
            try {
                const response = await Api.put(`api/company/${payload.id}`, payload);   
                commit("SET_UPDATE", response.data.data);            
                return response.data.data;    
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async UPDATED_IMAGE({ commit}, payload) {
            try {
                const response = await ApiFile.post(`api/company/updateImg`, payload.formData);   
                commit("SET_UPDATE", response.data.data);            
                return response.data.data;    
            } catch (error) {
                return Promise.reject(error);
            }
        },

    }
};
