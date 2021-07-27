<template>
    <v-navigation-drawer
        v-model="Drawer"
        app>
        <v-list dense>
            <template v-for="item in items">
                    <!-- v-if="item.children && permission.includes(item.permission)" -->
                <v-list-group
                    v-if="item.children && permission.includes(item.permission)"
                    :key="item.text"
                    v-model="item.model"
                    :prepend-icon="item.icon">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        v-on:click="router(child.href)"
                        link>
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                    <!-- v-else-if="permission.includes(item.permission)" -->
                <v-list-item
                    v-else-if="permission.includes(item.permission)"
                    :key="item.text"
                    v-on:click="router(item.href)"
                    link>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                role: '',
                permission: [],
                drawer: null,
                items: [
                    {
                        icon: 'mdi-home',
                        text: 'Principal',
                        href: "dashboard",
                        permission: 1
                    },                    
                    {
                        icon: 'mdi-account',
                        text: 'Usuarios',
                        href: "users",
                        permission: 2
                    },  
                    {
                        icon: 'mdi-ballot-outline',
                        text: 'Roles',
                        href: "role",
                        permission: 3
                    }, 
                    {
                        icon: 'mdi-file-document-edit ',
                        text: 'Ingresos',
                        href: "invoice",
                        permission: 7
                    }, 
                    {
                        icon: 'mdi-credit-card-minus',
                        text: 'Gastos',
                        href: "expense",
                        permission: 7
                    }, 
                    {
                        icon: 'mdi-clipboard-file',
                        text: 'Reportes',
                        href: "report",
                        permission: 7
                    },
                    {
                        icon: 'mdi-clipboard-file',
                        text: 'Reportes mensuales',
                        href: "monthly_reports",
                        permission: 7
                    }, 
                    {
                        icon: 'mdi-account-tie',
                        text: 'Clientes',
                        href: "customer",
                        permission: 5
                    },
                    {
                        icon: "mdi-cogs",
                        text: "Configuraciones",
                        permission: 1,
                        model: false,
                        children: [                            
                            {
                                icon: 'mdi-gift-outline',
                                text: 'Tipo de ingresos',
                                href: "donations_type",
                                permission: 6
                            },
                            {
                                icon: 'mdi-account-cash',
                                text: 'Proveedores',
                                href: "type_expense",
                                permission: 6
                            },
                            {
                                icon: 'mdi-account-cash',
                                text: 'Tipos de gasto',
                                href: "product_service",
                                permission: 6
                            },
                            {
                                icon: 'mdi-bank',
                                text: 'Empresa',
                                href: "company",
                                permission: 4
                            }, 
                        ]
                    },
                ],
            };
        },
        mounted() {
            this.role = localStorage.getItem("role_id");
            this.permission = localStorage.getItem("permission_id");
        },
        computed: {
            Drawer: {
                get() {
                    let drawer = this.$store.getters["layout/DRAWER_VALUE"];
                    return drawer === null ? true : drawer;
                },
                set(val) {
                    let drawer = this.$store.getters["layout/DRAWER_VALUE"];
                    this.$store.commit("layout/SET_DRAWER", val);
                }
            },
        },
        created() {
        },
        methods: {
            router(route) {
                this.$router.push({name: route}).catch(err => {
                });
            },
        }
    };
</script>

<style>
    /*.theme--light.v-list-item:hover:before {
        opacity: .3;
        background: #0d173b;
    }*/
    .mostaza--text {
        color: #d98f07 !important;
    }
</style>
