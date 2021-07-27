<template>
    <v-dialog v-model="active" max-width="800px" persistent>

        <v-card color="#fafafa">
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <ValidationObserver tag="form" v-slot="{ passes }" ref="obs">
                <v-card-text>
                  <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-list two-line subheader color="secondary round" class="shadow-small" dark>

                              <v-list-item>
                                <v-list-item-avatar size="80" tile>
                                  <v-img :src="itemCompany[0].image.path" contain></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-2">
                                        {{itemCompany[0].name}}
                                    </v-list-item-title>
                                  <v-list-item-subtitle>
                                      
                                  </v-list-item-subtitle>
                                  <v-list-item-subtitle>
                                      <span class="font-weight-bold">RUC: </span>
                                      {{itemCompany[0].ruc}}   
                                  </v-list-item-subtitle>
                                  <v-list-item-subtitle>
                                      <span class="font-weight-bold">TLF: </span>
                                      {{itemCompany[0].phone}}
                                  </v-list-item-subtitle>
                                  <v-list-item-subtitle>
                                      <span class="font-weight-bold">DIRECCIÓN: </span>
                                      {{itemCompany[0].address}}
                                  </v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-spacer></v-spacer>
                                    <span class="text-uppercase mb-2">
                                        Recibo de caja
                                    </span>
                                    <div style="border: 1px solid grey;border-radius: 5px" class="px-2">
                                        N° {{editedItem.number}}
                                    </div>
                                    <v-spacer></v-spacer>
                                </v-list-item-action>
                              </v-list-item>
                            </v-list>                                    
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-subheader class="pb-0">
                              <v-icon color="secondary">mdi-account</v-icon>
                              <span class="pb-0 dark-blue--text font-weight-bold">Cliente &nbsp;</span>
                              <!-- (Los datos del cliente se llenaran indicando el DNI o NIT del mismo, a excepción la fecha) -->
                            </v-subheader>
                            <v-divider class="mt-0"></v-divider>                            
                        </v-col>                       
                    </v-row>                      

                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          v-model="editedItem.client_id"
                          :items="ItemsCustomer"
                          item-text="dni"
                          item-value="id"
                          label="Buscar Cédula o  NIT del cliente"
                          hint="Indique el numero de cédula o NIT del cliente"
                          @change="getFilter"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <ValidationProvider name="Nombre de cliente" rules="required" v-slot="{ errors }">
                            <v-text-field
                                v-model="editedItem.name_client"
                                label="Nombre de cliente"
                                readonly
                                :error-messages="errors">
                            </v-text-field>
                        </ValidationProvider>                        
                      </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-subheader class="pb-0">
                              <v-icon color="secondary">mdi-receipt</v-icon>
                              <span class="pb-0 dark-blue--text font-weight-bold">Factura &nbsp;</span>
                              <!-- (Los datos del cliente se llenaran indicando el DNI o NIT del mismo, a excepción la fecha) -->
                            </v-subheader>
                            <v-divider class="mt-0"></v-divider>                            
                        </v-col>                       
                    </v-row>    

                    <v-row>
                       <v-col cols="12" sm="6" md="6" >
                            <ValidationProvider name="Tipo de donación"  v-slot="{ errors }">
                                <v-autocomplete
                                  v-model="editedItem.donation_id"
                                  :items="ItemsDonation"
                                  item-text="name_of_income"
                                  item-value="id"
                                  label="Tipo de donación"
                                  :error-messages="errors"
                                  @change="setAmount"
                                ></v-autocomplete>
                            </ValidationProvider>

                            <ValidationProvider name="Monto"  v-slot="{ errors }">
                                <v-text-field
                                    type="number"
                                    v-model="editedItem.amount"
                                    label="Monto"
                                    :hint="editedItem.amount"
                                    :error-messages="errors">
                                </v-text-field>
                            </ValidationProvider>

                            <ValidationProvider name="Cantidad" rules="numeric" v-slot="{ errors }">
                                <v-text-field
                                    v-model="editedItem.quantity"
                                    label="Cantidad"
                                    :error-messages="errors">
                                </v-text-field>
                            </ValidationProvider>                                    
                            

                            <v-btn block rounded dark color="secondary" @click="invoice_push">
                              Agregar
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-card
                            max-width="500"
                            class="mx-auto"
                            color="round"
                          >
                            <v-list>
                              <v-list-item-group>
                                <template v-for="(item, index) in items">
                                  <v-list-item :key="item.title">
                                    <template v-slot:default="{ active, toggle }">
                                      <v-list-item-content>
                                        <v-list-item-title v-text="item.donation"></v-list-item-title>
                                        <v-list-item-subtitle class="text--primary">
                                          <span>Monto: </span>
                                          {{item.amount | currency}}
                                        </v-list-item-subtitle>
                                        <v-list-item-subtitle>
                                          <span>Cantidad: </span>
                                          {{item.quantity}}
                                        </v-list-item-subtitle>
                                        <v-list-item-subtitle>
                                          <span>Subtotal: </span>
                                          {{item.sub_total | currency}}
                                        </v-list-item-subtitle>
                                      </v-list-item-content>
                                    </template>
                                  </v-list-item>

                                  <v-divider
                                    v-if="index + 1 < items.length"
                                    :key="index"
                                    class="my-0"
                                  ></v-divider>
                                </template>
                              </v-list-item-group>
                            </v-list>
                          </v-card>
                            <v-card-actions>
                              <span class="headline px-4">
                                Total: {{total_value() | currency}}
                              </span>
                              <v-spacer></v-spacer>
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
                            </v-card-actions>
                        </v-col>
                    </v-row>         
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      :loading="loading"
                      color="primary"
                      @click="passes(save)">
                      Guardar
                  </v-btn>

                  <v-btn text @click="close">Cancelar</v-btn>
                  <!-- <v-spacer></v-spacer> -->

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
            client_id: '',
            menu_birth: false,
            selected: [2],
            items: [],
            total: [0],
            loading: false,
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Nueva Factura' : 'Editar Factura'
            },
            // status: {
            //     get () {
            //         return (this.editedItem.status === 1) ? true : false
            //     },
            //     set (val) {
            //         this.editedItem.status = val
            //     }
            // }
            ItemsCustomerSearch() {
                return this.$store.getters["customer/GET_CUSTOMER_SEARCH"];
            },
            itemCompany(){
            return this.$store.getters["company/GET_COMPANY"];
            },
            ItemsDonation() {
              return this.$store.getters["donations/GET_DONATION"];
            },
            ItemsTypePayment() {
              return this.$store.getters["customer/GET_TYPE_PAYMENT"];
            },
            ItemsCustomer() {
              return this.$store.getters["customer/GET_CUSTOMERS"];
            },
            ItemsInvoice() {
              return this.$store.getters["invoice/GET_INVOICE"];
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
          if (this.edit === true) {
            this.total_edit()
          }else{
            this.number_end();            
          }

            // this.initialize();
            //this.ruc_type();
        },

        methods: {

            close() {
                this.$emit("dialog:change", "cerrar");
            },


            async save() {
                //   editar
                this.loading = true;

                if (this.edit === true) {
                    //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                    const request = [
                      {
                          id: this.editedItem.id,
                          number: this.editedItem.number,
                          client_id: this.editedItem.client_id,
                          amount: this.total_value(),
                      },
                      this.items,                          
                      {
                        amount: this.total_value(),
                        type_payment_id: this.editedItem.type_payment_id,                        
                      }
                    ]

                    try {
                        const response = await this.$store.dispatch("invoice/UPDATED", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "editar");
                        this.loading = false


                        // this.close()
                    } catch (error) {
                        console.log(error);
                        this.loading = false
                    }
                } else {
                    // guardar
                    try {

                        const request = [
                          {
                              // id: this.editedItem.id,
                              number: this.editedItem.number,
                              client_id: this.editedItem.client_id,
                              amount: this.total_value(),
                          },
                          this.items,                          
                          {
                            amount: this.total_value(),
                            type_payment_id: this.editedItem.type_payment_id,                        
                          }
                        ]


                        const response = await this.$store.dispatch("invoice/REGISTER", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "registro");
                        this.loading = false

                        // Swal.fire({
                        //   icon: 'success',
                        //   title: 'Empresa creada con exito',
                        // })
                        // this.close()
                    } catch (error) {
                        this.loading = false

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

            async getFilter () {
              const client_id = this.editedItem.client_id;
              const customer = this.ItemsCustomer.find(function(index) {
                return index.id == client_id;
              });
              this.editedItem.name_client = customer.name

            },
            invoice_push() {
              if (this.editedItem.donation_id && this.editedItem.amount && this.editedItem.quantity !== '') 
              {

                let donation_id = this.editedItem.donation_id;
                let donation_name = this.ItemsDonation.find(function(index) {
                  return index.id == donation_id;
                });

                const request = {
                  id: 0,
                  donation: donation_name.name_of_income,
                  donation_id: this.editedItem.donation_id,
                  amount: this.editedItem.amount,
                  quantity: this.editedItem.quantity,
                  sub_total: this.editedItem.amount * this.editedItem.quantity
                }

                this.total.push(request.sub_total);

                this.editedItem.donation_id = ''
                this.editedItem.amount = ''
                this.editedItem.quantity = ''
                this.$refs.obs.reset();

                this.items.push(request);
              }
            },
            total_value() {
              return this.total.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue
              })
            },
            total_edit() {
              for (let value of this.editedItem.donations_invoice) {
                let donation_id = value.donation_id;
                let donation_name = this.ItemsDonation.find(function(index) {
                  return index.id == donation_id;
                });

                const request = {
                  id: value.id,
                  donation: donation_name.name_of_income,
                  donation_id: value.donation_id,
                  amount: value.amount,
                  quantity: value.quantity,
                  sub_total: value.amount * value.quantity
                }

                this.total.push(request.sub_total);

                this.items.push(request);
              }
            },
            setAmount() {
              let donation_id = this.editedItem.donation_id;
              let donation = this.ItemsDonation.find(function(index) {
                  return index.id == donation_id;
              });

              this.editedItem.amount = donation.value
            },
            number_end() {
              if (this.ItemsInvoice.length > 0) {
                let num = this.ItemsInvoice[this.ItemsInvoice.length - 1].number;
                this.editedItem.number = parseInt(num) + 1;
              }else {
                this.editedItem.number = 1;
              }
            }
        },
    }
</script>
