<template>
    <v-dialog v-model="active" max-width="600px" persistent>

        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <ValidationObserver tag="form" v-slot="{ passes }" ref="obs">
                <v-card-text>
                    <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.name"
                                            label="Nombre"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Role" rules="required" v-slot="{ errors }">
                                        <v-autocomplete
                                          v-model="editedItem.role_id"
                                          :items="ItemsRole"
                                          item-text="name"
                                          item-value="id"
                                          label="Role"
                                        ></v-autocomplete>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.email"
                                            label="Email"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6" v-if="edit === false">
                                    <ValidationProvider name="contraseña" rules="required|min:6" v-slot="{ errors }">
                                        <v-text-field
                                            type="password"
                                            v-model="editedItem.password"
                                            label="Contraseña"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6" v-if="edit === false">
                                    <ValidationProvider name="contraseña" rules="required|min:6" v-slot="{ errors }">
                                        <v-text-field
                                            type="password"
                                            v-model="editedItem.password_confirmation"
                                            label="Confirmación de contraseña"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>                                
                            </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      color="primary"
                      @click="passes(save)">
                      Guardar
                  </v-btn>

                  <v-btn text @click="close">Cancelar</v-btn>
                </v-card-actions>
            </ValidationObserver>


        </v-card>
    </v-dialog>
</template>
<script>
    import Swal from 'sweetalert2';

    export default {
        props: ["active", "editedItem", "edit"],

        data: () => ({
            snackbar: false,
            text: '',
            loading: false,
            menu1: false,
            menu2: false,
            e1: 1,
            position_array: '',
            id_user: 0,
            itemsPerPage: 10,
            desserts: [],
            editedIndex: -1,
            password: '',
            files: [],
            confirm_password: '',
            defaultItem: {
                name: '',
                email: '',
                rol: '',
                // permission: []
            },
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Nuevo Usuario' : 'Editar Usuario'
            },
            ItemsRole() {
                return this.$store.getters["role/GET_ROLE"];
            },
            // status: {
            //     get () {
            //         return (this.editedItem.status === 1) ? true : false
            //     },
            //     set (val) {
            //         this.editedItem.status = val
            //     }
            // }
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            // this.initialize();
            //this.ruc_type();
        },

        methods: {

            async save1() {
                this.e1 = 2
            },

            close() {
                this.$emit("dialog:change", "cerrar");
            },


            async save() {
                //   editar
                if (this.edit === true) {
                    //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                    const request = {
                        id: this.editedItem.id,
                        name: this.editedItem.name,
                        role_id: this.editedItem.role_id,
                        email: this.editedItem.email,
                        position_array: this.editedItem.position_array
                    }

                    try {
                        const response = await this.$store.dispatch("user/UPDATED", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "editar");


                        // this.close()
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    // guardar
                    try {

                        const request = {
                            name: this.editedItem.name,
                            role_id: this.editedItem.role_id,
                            email: this.editedItem.email,
                            password: this.editedItem.password,
                            password_confirmation: this.editedItem.password_confirmation,
                        }

                        const response = await this.$store.dispatch("user/REGISTER", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "registro");
                    } catch (error) {

                        let e = error.response.data.message;
                        let list = "";

                        for (const prop in e) {
                          list = list + `<li>${e[prop][0]}</li>`;
                        }

                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          html: list
                        });
                    }
                    // this.close()
                }
            },
        },
    }
</script>
