require('./bootstrap');

window.Vue = require('vue');

// COMPONENTE PRINCIPAL
import App from './App.vue';
// ROUTER (vueroute)
import router from './router/router';
// STORE (vuex)
import store from './store';
// VUETIFY 
import vuetify from './plugins/vuetify';
// VEE-VALIDATE
import './plugins/veeValidate/veeValidate';

// FILTROS
import filters from './filters/index'
Vue.use(filters);

store.dispatch("auth/TRY_AUTO_LOGIN");

const app = new Vue({
    el: '#app',
    components: {App},
    vuetify,
    router,
    store,
});
