import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {layout} from './modules/layout';
import {auth} from './modules/auth';
import {user} from './modules/user';
import {role} from './modules/role';
import {permission} from './modules/permission';
import {customer} from './modules/customer';
import {donations} from './modules/donations';
import {company} from './modules/company';
import {invoice} from './modules/invoice';
import {type_expenses} from './modules/type_expenses';
import {expenses} from './modules/expenses';
import {reports} from './modules/reports';
import {product_service} from './modules/product_service';

export default new Vuex.Store({
    modules: {
        layout,
        auth,
        user,
        role,
        permission,
        customer,
        donations,
        company,
        invoice,
        type_expenses,
        expenses,
        reports,
        product_service
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {}
});