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
                                    <ValidationProvider name="Tipo de donación"  rules="required" v-slot="{ errors }">
                                        <v-autocomplete
                                          v-model="editedItem.type_expenses_id"
                                          :items="ItemsTypeExpenses"
                                          item-text="name"
                                          item-value="id"
                                          label="Proveedores"
                                          :error-messages="errors"
                                          @change="setAmount"
                                        ></v-autocomplete>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <ValidationProvider name="Tipo de pago" rules="required" v-slot="{ errors }">
                                        <v-autocomplete
                                          v-model="editedItem.type_payment_id"
                                          :items="ItemsTypePayment"
                                          item-text="name"
                                          item-value="id"
                                          label="Tipo de pago"
                                          :error-messages="errors"
                                        ></v-autocomplete>
                                    </ValidationProvider> 
                                </v-col> 
                                <v-col cols="12" sm="6" md="6">
                                    <ValidationProvider name="Cantidad" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            type="number" 
                                            v-model="editedItem.quantity"
                                            label="Cantidad"
                                            :error-messages="errors">
                                        </v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-menu
                                    v-model="menu_date"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                  >
                                    <template v-slot:activator="{ on }">
                                      <ValidationProvider name="Fecha de pago del gasto" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                          v-model="editedItem.date_payment_expense"
                                          label="Fecha de pago del gasto"
                                          readonly
                                          v-on="on"
                                          :error-messages="errors"
                                        ></v-text-field>
                                      </ValidationProvider>
                                    </template>
                                    <v-date-picker v-model="editedItem.date_payment_expense" @input="menu_date = false" no-title></v-date-picker>
                                  </v-menu>
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
            menu_date: false,
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Nuevo gasto' : 'Editar gasto'
            },
            ItemsTypeExpenses() {
                return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
            },
            ItemsTypePayment() {
              return this.$store.getters["customer/GET_TYPE_PAYMENT"];
            },
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

            setAmount() {
              const id_type = this.ItemsTypeExpenses.find((index) => {
                                return index.id == this.editedItem.type_expenses_id;
                              }); 

              if (id_type !== undefined) {
                this.editedItem.quantity = id_type.quantity
              }
            },

            async save() {
                //   editar
                if (this.edit === true) {
                    //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                    const request = {
                        id: this.editedItem.id,
                        type_expenses_id: this.editedItem.type_expenses_id,
                        quantity: this.editedItem.quantity,
                        type_payment_id: this.editedItem.type_payment_id,
                        date_payment_expense: this.editedItem.date_payment_expense,
                    }

                    try {
                        const response = await this.$store.dispatch("expenses/UPDATED", request);

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
                            type_expenses_id: this.editedItem.type_expenses_id,
                            quantity: this.editedItem.quantity,
                            type_payment_id: this.editedItem.type_payment_id,
                            date_payment_expense: this.editedItem.date_payment_expense,
                        }

                        const response = await this.$store.dispatch("expenses/REGISTER", request);

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
