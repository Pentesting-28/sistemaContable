// este es un esqueleto basico que realizo para las rutas
import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            name: "login",
            path: "/",
            component: () =>
                import(/* webpackChunkName: "login" */ "../components/auth/Login"),
        },
        {
            name: "get_invoice",
            path: "/get_invoice/:id",
            component: () =>
                import(/* webpackChunkName: "login" */ "../components/User/getInvoice"),
        },
        {
            name: "layout",
            path: "/layout",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import(/* webpackChunkName: "layout" */ "../components/layout/Layout"),
            children: [
                {
                    name: "dashboard",
                    path: "/dashboard",
                    meta: {
                        checkRole: 1
                    },
                    component: () =>
                        import(/* webpackChunkName: "dashboard" */ "../components/layout/Dashboard"),
                },
                {
                    name: "users",
                    path: "/users",
                    meta: {
                        checkRole: 2
                    },
                    component: () =>
                        import(/* webpackChunkName: "user" */ "../components/User/Index.vue"),
                },
                {
                    name: "role",
                    path: "/role",
                    meta: {
                        checkRole: 3
                    },
                    component: () =>
                        import(/* webpackChunkName: "role" */ "../components/Role/Index.vue"),
                },
                {
                    name: "customer",
                    path: "/customer",
                    meta: {
                        checkRole: 5
                    },
                    component: () =>
                        import(/* webpackChunkName: "customer" */ "../components/Customer/Index.vue"),
                },
                {
                    name: "donations_type",
                    path: "/donations_type",
                    meta: {
                        checkRole: 6
                    },
                    component: () =>
                        import(/* webpackChunkName: "donation_type" */ "../components/Donations/Types/Index.vue"),
                },
                {
                    name: "company",
                    path: "/company",
                    meta: {
                        checkRole: 4
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Company/Index.vue"),
                },
                {
                    name: "invoice",
                    path: "/invoice",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Invoices/Index.vue"),
                },
                {
                    name: "type_expense",
                    path: "/type_expense",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Expenses/Types/Index.vue"),
                },
                {
                    name: "expense",
                    path: "/expense",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Expenses/Expenses/Index.vue"),
                },
                {
                    name: "report",
                    path: "/report",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Reports/Index.vue"),
                },
                {
                    name: "product_service",
                    path: "/product_service",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/ProductService/Types/Index.vue"),
                },
                {
                    name: "monthly_reports",
                    path: "/monthly_reports",
                    meta: {
                        checkRole: 7
                    },
                    component: () =>
                        import(/* webpackChunkName: "company" */ "../components/Reports/Monthly/Index.vue"),
                },
            ]
        }
    ],
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        return { x: 0, y: 0 }
    }
});


router.beforeEach((to, from, next) => {
    // Consulta VUEX
    const authUser = store.getters["auth/IS_AUTHENTICATED"];
    const role = JSON.parse(`[ ${localStorage.getItem("permission_id")} ]`);
    // CREACION META
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const checkRole = to.matched.some(record => record.meta.checkRole);

   
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!authUser) {
            next({
                path: "/",
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            if (role.includes(to.meta.checkRole)) {
                next();
            } else {
                router.push({
                    name: "dashboard"
                });
            }
        }
    } else {
        next(); // make sure to always call next()!
    }
});
export default router;
