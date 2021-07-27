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
                                    <ValidationProvider name="Nombre de tipo de gasto" rules="required" v-slot="{ errors }">
                                        <v-text-field
                                            v-model="editedItem.name"
                                            label="Nombre de tipo de gasto"
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
                return this.edit === false ? 'Nuevo tipo de gasto' : 'Editar tipo de gasto'
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
            AmountFormat(){
                let value = this.editedItem.amount.toString().replace(",","").replace(/^0+/g,"");

                if(value.length > 0 && parseInt(value) > 0){
                    let aux = value.padStart(3,"0");
                    let decimal = aux.slice(aux.length-2, aux.length);
                    let integer = aux.slice(0, aux.length-2)

                    this.editedItem.amount = `${integer},${decimal}`;
                }
                else{
                    this.editedItem.amount = "0,00";
                }
            },


            async save() {
                //   editar
                if (this.edit === true) {
                    //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                    const request = {
                        id: this.editedItem.id,
                        name: this.editedItem.name
                    }

                    try {
                        const response = await this.$store.dispatch("product_service/UPDATED", request);

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
                            name: this.editedItem.name
                        }

                        const response = await this.$store.dispatch("product_service/REGISTER", request);

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
