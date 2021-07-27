<template>
  <v-container>
    <v-row>
        <v-col>
        	<v-toolbar flat color="transparent" class="round">
	            <v-spacer></v-spacer>

	              <v-btn
                  v-if="itemCompany.length == 0"
	                rounded
	                text
	                color="secondary"
	                class="mb-2 font-weight-bold"
	                @click="registerItem"
	                dark>
	                  <v-icon class="mr-3">mdi-plus</v-icon>
	                  Agregar Empresa
	              </v-btn>

                <v-btn
                  v-else
                  rounded
                  text
                  color="secondary"
                  class="mb-2 font-weight-bold"
                  @click="editItem(itemCompany)"
                  dark>
                    <v-icon class="mr-3">mdi-pencil</v-icon>
                    Editar Empresa
                </v-btn>

	            <dialogCompany
	              v-if="active"
	              :active="active"
	              :editedItem="data_edit"
	              :edit="edit"
                :image="image"
                :register="register"
	              @dialog:change="eventdialog">

	            </dialogCompany>

	        </v-toolbar>
          <v-card class="shadow-large round">
              <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-list-item>
                        <v-list-item-content>
                            <!-- <v-list-item-title> -->
                                <h2 v-if="itemCompany.length > 0" class="display-1 mb-2 dark-blue--text">{{itemCompany[0].name}}</h2>
                                <h2 v-else class="display-1 mb-2 dark-blue--text">Registrar datos de la empresa</h2>
                            <!-- </v-list-item-title> -->
                        </v-list-item-content>
                    </v-list-item>
                    <span v-if="itemCompany.length > 0">
                      <v-list-item two-line>
                          <v-list-item-content>
                              <v-list-item-title>Ruc</v-list-item-title>
                              <v-list-item-subtitle>{{itemCompany[0].ruc}}</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line>
                          <v-list-item-content>
                              <v-list-item-title>Teléfono</v-list-item-title>
                              <v-list-item-subtitle>{{itemCompany[0].phone}}</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line>
                          <v-list-item-content>
                              <v-list-item-title>Dirección</v-list-item-title>
                              <v-list-item-subtitle>{{itemCompany[0].address}}</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>                      
                    </span>

                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-card flat>
                      <v-img v-if="itemCompany.length > 0 && itemCompany[0].image !== undefined" :src="itemCompany[0].image.path" aspect-ratio="2" contain></v-img>
                      <v-img v-else src='../img/folder_photo1.svg' aspect-ratio="2" contain></v-img>   
                      <v-btn
                        v-if="itemCompany.length > 0"
                        absolute
                        dark
                        top
                        right
                        color="secondary"
                        small
                        rounded
                        @click="editItemImage(itemCompany)"
                      >
                        Editar Imagen
                      </v-btn>                  
                        
                    </v-card>
                  </v-col>
              </v-row>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Swal from 'sweetalert2';
  import dialogCompany from './Dialog';

  export default {
    components: {
        dialogCompany
    },

    data: () => ({
    data_edit: {},
    active: false,
    edit: false,
    image: false,
    register: false,
    id_user: 0,
    itemsPerPage: 10,
      dialog: false,
      desserts: [],      
    }),



    computed: {
      formTitle () {
        return this.edit === false ? 'Agregar empresa' : 'Editar empresa'
      },
      itemCompany(){
            return this.$store.getters["company/GET_COMPANY"];
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize();
    },

    methods: {
      async initialize () {
        try {
            const response = await this.$store.dispatch("company/INDEX");
            
        } catch (error) {
          console.log(error);
        }
      },      

      eventdialog(message) {
        if (message === 'registro') {
          Swal.fire({
              icon: 'success',
              title: 'Empresa creado con exito',
            })
          this.active = false;
          this.edit = false;
        }else if (message === 'editar') {
          Swal.fire({
              icon: 'success',
              title: 'Empresa editado con exito',
            })
          this.active = false;
          this.edit = false;
        }else if (message === 'imagen') {
          Swal.fire({
              icon: 'success',
              title: 'Imagen actualizada con exito',
            })
          this.active = false;
          this.edit = false;
        }else {
          this.active = false;
          this.edit = false;
        }
      },

      registerItem () {
        this.data_edit = {}
        this.active = true
        this.edit = false
        this.register = true
        this.image = true
      },

      editItem (item) {

        this.data_edit = {
          id: item[0].id,
          ruc: item[0].ruc,
          name: item[0].name,
          phone: item[0].phone,
          address: item[0].address
        }

        this.active = true
        this.edit = true
        this.register = false        
        this.image = false
      },

      editItemImage(item) {

        this.data_edit = {
          id: item[0].id,
          photo: item[0].photo,
        }

        this.active = true
        this.edit = false
        this.register = false        
        this.image = true
      },

      close () {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.edit = false;
        }, 300)
      },

      getColor (value) {
        if (value == 1) {
          return 'success'
        } else {
          return 'red'
        }
      },

    },
  }
</script>

<style>
.length_text {
  font-size: 1rem !important
}
</style>
