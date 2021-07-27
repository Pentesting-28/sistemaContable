<template>
    <v-dialog v-model="active" max-width="400px" persistent>

        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <ValidationObserver tag="form" v-slot="{ passes }" ref="obs">
                <v-card-text>
                    <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.name"
                                            label="Nombre"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Tipo" rules="required" v-slot="{ errors }">
                                        <!-- <v-text-field
                                            v-model="editedItem.type"
                                            label="Tipo"
                                            :error-messages="errors">
                                        </v-text-field> -->
                                        <v-autocomplete
                                          v-model="editedItem.product_or_service_id"
                                          :items="ItemsProductService"
                                          item-text="name"
                                          item-value="id"
                                          label="Tipo de gasto"
                                          :error-messages="errors"
                                        ></v-autocomplete>
                                    </ValidationProvider>
                                </v-col> 
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Cantidad" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            type="number" 
                                            v-model="editedItem.quantity"
                                            label="Cantidad"
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
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Nuevo proveedor' : 'Editar proveedor'
            },
            ItemsProductService() {
              return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
            }
            
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
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
                        quantity: this.editedItem.quantity,
                        product_or_service_id: this.editedItem.product_or_service_id
                    }

                    try {
                        const response = await this.$store.dispatch("type_expenses/UPDATED", request);

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
                            quantity: this.editedItem.quantity,
                            product_or_service_id: this.editedItem.product_or_service_id
                        }

                        const response = await this.$store.dispatch("type_expenses/REGISTER", request);

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
