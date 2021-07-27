<template>
  <v-container>
    <v-row>
        <v-col>
        	<v-toolbar flat color="transparent" class="round">
                <v-toolbar-title class="headline mb-2 dark-blue--text">Roles</v-toolbar-title>
	            <v-divider
	            class="mx-4"
	            inset
	            vertical></v-divider>
	            <v-spacer></v-spacer>

	              <v-btn
	                rounded
	                text
	                color="secondary"
	                class="mb-2 font-weight-bold"
	                @click="registerItem"
	                dark>
	                  <v-icon class="mr-3">mdi-playlist-plus</v-icon>
	                  Nuevo Rol
	              </v-btn>

	            <dialogUsers
	              v-if="active"
	              :active="active"
	              :editedItem="data_edit"
	              :edit="edit"
	              @dialog:change="eventdialog">

	            </dialogUsers>

	        </v-toolbar>
          <v-card class="shadow-large round">
            <v-data-table
              :headers="headers"
              :items="ItemsRole"
              class="elevation-0">
              <template v-slot:item.action="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-account-edit
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-account-remove
                </v-icon>
              </template>

              <!-- <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template> -->
            </v-data-table>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Swal from 'sweetalert2';
  import dialogUsers from './Dialog';

  export default {
    components: {
        dialogUsers
    },

    data: () => ({
    data_edit: {},
    active: false,
    snackbar: false,
    text: '',
    loading: false,
    menu1: false,
    menu2: false,
    e1: 1,
    edit: false,
    position_array: '',
    id_user: 0,
    itemsPerPage: 10,
      dialog: false,
      headers: [
        { text: 'Nombre', align: 'left', sortable: false, value: 'name', class: 'text-uppercase'},
        { text: 'Descripción', align: 'left', sortable: false, value: 'description', class: 'text-uppercase'},
        { text: 'Acciones', value: 'action', sortable: false, class: 'text-uppercase' },
      ],
      desserts: [],
    }),



    computed: {
      formTitle () {
        return this.edit === false ? 'Nuevo Role' : 'Editar Role'
      },
      ItemsRole() {
        return this.$store.getters["role/GET_ROLE"];
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize();
      this.permissions();
    },

    methods: {
      async initialize () {
        try {
          const response = await this.$store.dispatch("role/INDEX");
        } catch (error) {
          console.log(error);
        }
      },

      async permissions () {
        try {
          const response = await this.$store.dispatch("permission/INDEX");
        } catch (error) {
          console.log(error);
        }
      },


      eventdialog(message) {
        if (message === 'registro') {
          Swal.fire({
              icon: 'success',
              title: 'Rol creado con exito',
            })
          this.active = false;
          this.edit = false;
        }else if (message === 'editar') {
          Swal.fire({
              icon: 'success',
              title: 'Rol editado con exito',
            })
          this.active = false;
          this.edit = false;
        }else {
          this.active = false;
          this.edit = false;
        }
      },

      registerItem (item) {
        this.data_edit = {}
        this.active = true
        this.edit = false
      },

      editItem (item) {
        this.data_edit = {
          ...item,
          permission: item.permissions.map((index) => {
            return index.id;
          }),
          position_array: this.ItemsRole.indexOf(item)
        }

        this.active = true
        this.edit = true
      },

      async deleteItem (item) {
        try {
          const request = {
            position_array: this.ItemsRole.indexOf(item),
            ...item
          }
          const response = await this.$store.dispatch("bank/DELETE", request);
        } catch (error) {
          console.log(error);
        }
        // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
