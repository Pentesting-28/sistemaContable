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
                                    <ValidationProvider name="Cedula o NIT" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.dni"
                                            label="Cedula o NIT"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>

                                <v-col cols="12">
                                    <ValidationProvider name="Correo" rules="email" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.email"
                                            label="Correo"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Celular" rules="min:6" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.cellular"
                                            label="Celular"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6" >
                                    <ValidationProvider name="Teléfono residencial" rules="min:6" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.residential_phone"
                                            label="Teléfono residencial"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>  
                                <v-col cols="12">
                                    <ValidationProvider name="Dirección"  v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.address"
                                            label="Dirección"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12">
                                    <ValidationProvider name="Notificaciones"  v-slot="{ errors }">
                                      <v-checkbox
                                        v-model="editedItem.notifications"
                                        label="Desea recibir notificaciones ?"
                                        :error-messages="errors"
                                      ></v-checkbox>
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
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Nuevo cliente' : 'Editar cliente'
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
                        address: this.editedItem.address,
                        email: this.editedItem.email,
                        cellular: this.editedItem.cellular,
                        dni: this.editedItem.dni,
                        residential_phone: this.editedItem.residential_phone,
                        notifications: this.editedItem.notifications,
                    }


                    try {
                        const response = await this.$store.dispatch("customer/UPDATED", request);
                        

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
                            id: this.editedItem.id,
                            name: this.editedItem.name,
                            address: this.editedItem.address,
                            email: this.editedItem.email,
                            cellular: this.editedItem.cellular,
                            dni: this.editedItem.dni,
                            residential_phone: this.editedItem.residential_phone,
                            notifications: this.editedItem.notifications,
                        }

                        const response = await this.$store.dispatch("customer/REGISTER", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "registro");


                        // Swal.fire({
                        //   icon: 'success',
                        //   title: 'Empresa creada con exito',
                        // })
                        // this.close()
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
