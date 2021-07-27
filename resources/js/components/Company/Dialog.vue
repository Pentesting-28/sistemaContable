<template>
    <v-dialog v-model="active" max-width="600px" persistent>

        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <ValidationObserver tag="form" v-slot="{ passes }" ref="obs">
                <v-card-text>
                    <v-container>
                        <v-row v-if="image === true || register === true">
                            <v-col sm="6" offset-sm="3">
                                <!-- <v-img :src="editedItem.photo" aspect-ratio="2" contain ></v-img> -->
                                <v-expand-x-transition>
                                    <v-col cols="12" v-if="img_expand">
                                        <v-img
                                          :src="img_preview"
                                          alt="foto cedula"
                                          aspect-ratio="2"
                                          dark
                                          contain
                                        >
                                        </v-img>
                                    </v-col>
                                    <v-col cols="12" v-if="typeof editedItem.photo_dni == 'string'">
                                        <v-img
                                          :src="editedItem.photo_dni"
                                          alt="foto cedula"
                                          aspect-ratio="2"
                                          dark
                                          contain
                                        >
                                        </v-img>
                                    </v-col>
                                </v-expand-x-transition>
                                <ValidationProvider name="Cargar imagen" v-slot="{ errors }">
                                    <v-file-input 
                                        label="Cargar imagen" 
                                        v-model="editedItem.photo"
                                         @change="onFileSelected"
                                        accept=".jpg,.png"
                                    ></v-file-input>
                                </ValidationProvider>
                            </v-col>
                        </v-row>
                        <v-row v-if="image === false || register === true">
                            <v-col cols="12" sm="6">
                                <ValidationProvider name="Ruc" rules="" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="editedItem.ruc"
                                        label="Ruc"
                                        :error-messages="errors">
                                    </v-text-field>
                                </ValidationProvider>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="editedItem.name"
                                        label="Nombre"
                                        :error-messages="errors">
                                    </v-text-field>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="12" sm="6" >
                                <ValidationProvider name="Teléfono" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="editedItem.phone"
                                        label="Teléfono"
                                        :error-messages="errors"
                                        >
                                    </v-text-field>
                                </ValidationProvider>
                            </v-col> 
                            <v-col cols="12" sm="6">
                                <ValidationProvider name="Dirección" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="editedItem.address"
                                        label="Dirección"
                                        :error-messages="errors">
                                    </v-text-field>
                                </ValidationProvider>
                            </v-col>
                                                        
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      :loading="loading"
                      v-if="register === true"
                      color="primary"
                      @click="passes(save)">
                      Guardar
                  </v-btn>
                  <v-btn
                      :loading="loading"
                      v-else-if="edit === true"
                      color="primary"
                      @click="passes(save)">
                      Guardar
                  </v-btn>
                  <v-btn
                      :loading="loading"
                      v-else-if="image === true"
                      color="primary"
                      @click="passes(saveImage)">
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
        props: ["active", "editedItem", "edit", "image", "register"],

        data: () => ({
            img_preview: '',
            img_expand: '',
            loading: false
            
        }),

        computed: {
            formTitle() {
                return this.edit === false ? 'Datos de la empresa' : 'Editar empresa'
            },
            
            ItemsRole() {
                return this.$store.getters["role/GET_ROLE"];
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

            onFileSelected(event) {
                
              
              if (event === undefined) {
                  this.img_expand = false;
                  this.img_preview = '';
                  return;
              }
              const reader = new FileReader();

              // const imgtag = document.getElementById("photopreview");
              // imgtag.title = event.name;

              reader.onload = (readEvent) => {
                  this.img_preview = readEvent.target.result;
                  this.img_expand = true;
              };

              reader.onerror = (event) => {
                  console.warn(event);
                  reader.abort();
              }

              reader.onabort = () => {
                  this.img_preview = '';
                  this.img_expand = false;
              }

              reader.readAsDataURL(event);
            },

            readFile:function(evt)
            {
                var vx = this;
                var file = event.target.files[0];
                var reader = new FileReader();

                reader.onload = function (event) {
                    vx.editedItem.Img = event.target.result;
                };

                reader.readAsDataURL(file);
            },

            async save() {
                //   editar
                this.loading = true

                
                if (this.edit === true) {
                    //   Object.assign(this.desserts[this.editedIndex], this.editedItem)

                    const request = {
                        id: this.editedItem.id,
                        ruc: this.editedItem.ruc,
                        name: this.editedItem.name,
                        phone: this.editedItem.phone,
                        address: this.editedItem.address,
                        photo: this.editedItem.photo,
                    }

                    try {
                        const response = await this.$store.dispatch("company/UPDATED", request);

                        this.$refs.obs.reset();

                        this.$emit("dialog:change", "editar");


                        // this.close()
                    } catch (error) {
                        console.log(error);
                        this.loading = false

                    }
                } else {

                        try {
                            let formData = new FormData();
                            formData.append("ruc", this.editedItem.ruc);
                            formData.append("name", this.editedItem.name);
                            formData.append("phone", this.editedItem.phone);
                            formData.append("address", this.editedItem.address);
                            formData.append("photo", this.editedItem.photo);

                            const request = {
                                formData: formData
                            }

                            const response = await this.$store.dispatch("company/REGISTER", request);

                            this.$refs.obs.reset();

                            this.$emit("dialog:change", "registro");
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

            async saveImage() {
                try {
                    this.loading = true

                    let formData = new FormData();
                    formData.append("company_id", this.editedItem.id);
                    formData.append("photo", this.editedItem.photo);

                    const request = {
                        formData: formData
                    }

                    const response = await this.$store.dispatch("company/UPDATED_IMAGE", request);

                    this.$refs.obs.reset();

                    this.$emit("dialog:change", "imagen");


                    // Swal.fire({
                    //   icon: 'success',
                    //   title: 'Empresa creada con exito',
                    // })
                    // this.close()
                } catch (error) {
                    this.loading = false
                    

                    // let e = error.response.data.message;
                    
                    // let list = "";

                    // for (const prop in e) {
                        
                    //   list = list + `<li>${e[prop][0]}</li>`;
                    // }

                    // Swal.fire({
                    //   icon: "error",
                    //   title: "Oops...",
                    //   html: list
                    // });
                }
            }
        },
    }
</script>
