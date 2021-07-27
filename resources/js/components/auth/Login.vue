<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="4">
                        <v-card flat>
                            <h2 class="display-1 mb-2 dark-blue--text">
                                Sistema Contable
                            </h2>
                            <h4 class="subtitle-1 mb-5">
                                Bienvenidos.
                            </h4>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Email"
                                        name="email"
                                        prepend-icon="mdi-account"
                                        type="email"
                                        v-model="email"
                                    />

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        v-model="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn
                                    block
                                    dark
                                    rounded
                                    color="secondary"
                                    @click="login"
                                    :loading="loading"
                                    >Iniciar Sesión</v-btn
                                >
                                <v-spacer />
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="7">
                        <v-img
                            src="../img/contable.svg"
                            :aspect-ratio="1.5"
                            contain
                        ></v-img>
                    </v-col>
                    <v-snackbar v-model="snackbar" top>
                        {{ text }}
                        <v-btn
                            dark
                            text
                            color="pink"
                            @click="snackbar = false"
                            class="font-weight-bold"
                        >
                            Cerrar
                        </v-btn>
                    </v-snackbar>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        snackbar: false,
        text: "",
        email: "admin@email.com",
        password: "123456",
        loading: false
    }),
    methods: {
        async login() {
            try {
                this.loading = true;
                const request = {
                    email: this.email,
                    password: this.password
                };
                const response = await this.$store.dispatch(
                    "auth/LOGIN_USER",
                    request
                );
                
                // this.loading = false;
                this.$router.push({ name: "dashboard" });
            } catch (error) {
                this.loading = false;
                this.text = "Datos invalidos";
                this.snackbar = true;
                console.log(error);
            }
        }
    }
};
</script>
<style>
.dark-blue--text {
    color: #035464 !important;
}
</style>
