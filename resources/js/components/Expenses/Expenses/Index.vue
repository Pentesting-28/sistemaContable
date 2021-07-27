<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar flat color="transparent" class="round">
          <v-toolbar-title class="headline mb-2 dark-blue--text">Gastos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn
            rounded
            text
            color="secondary"
            class="mb-2 font-weight-bold"
            @click="registerItem"
            dark
          >
            <v-icon class="mr-3">mdi-account-plus</v-icon>Nuevo gasto
          </v-btn>

          <dialogTypes
            v-if="active"
            :active="active"
            :editedItem="data_edit"
            :edit="edit"
            @dialog:change="eventdialog"
          ></dialogTypes>
        </v-toolbar>
        <v-card class="shadow-large round">
          <v-data-table :headers="headers" :items="ItemsExpenses" class="elevation-0">
            <template v-slot:item.date_payment_expense="{ item }">
              <span>{{ item.date_payment_expense | date }}</span>
            </template>
            <template v-slot:item.created_at="{ item }">
              <span>{{ item.created_at | date }}</span>
            </template>
            <template v-slot:item.action="{ item }">
              <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-account-edit</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-account-remove</v-icon>-->
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  x-small
                  icon
                  :color="hover ? 'amber' : 'blue-grey'"
                  @click="editItem(item, 1)"
                >
                  <v-tooltip color="gray darken-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-account-edit</v-icon>
                    </template>
                    <span>Actualizar gasto</span>
                  </v-tooltip>
                </v-btn>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  x-small
                  icon
                  :color="hover ? 'red' : 'blue-grey'"
                  @click="HandlerDeleteItem(item, 1)"
                >
                  <v-tooltip color="gray lighten-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-account-remove</v-icon>
                    </template>
                    <span>Eliminar gasto</span>
                  </v-tooltip>
                </v-btn>
              </v-hover>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import dialogTypes from "./Dialog";
import moment from "moment";

export default {
  components: {
    dialogTypes
  },

  data: () => ({
    data_edit: {},
    active: false,
    snackbar: false,
    text: "",
    loading: false,
    menu1: false,
    menu2: false,
    e1: 1,
    edit: false,
    position_array: "",
    id_user: 0,
    itemsPerPage: 10,
    dialog: false,
    headers: [
      // { text: 'Id', align: 'left', sortable: false, value: 'name', class: 'text-uppercase'},
      {
        text: "Tipo de gasto",
        align: "left",
        sortable: false,
        value: "type_expenses.name",
        class: "text-uppercase"
      },
      {
        text: "Tipo de pago",
        align: "left",
        sortable: false,
        value: "type_payment.name",
        class: "text-uppercase"
      },
      {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "quantity",
        class: "text-uppercase"
      },
      {
        text: "Fecha de gasto",
        align: "left",
        sortable: false,
        value: "date_payment_expense",
        class: "text-uppercase"
      },
      {
        text: "Fecha de registro",
        align: "left",
        sortable: false,
        value: "created_at",
        class: "text-uppercase"
      },
      {
        text: "Acciones",
        value: "action",
        sortable: false,
        class: "text-uppercase"
      }
    ],
    desserts: []
  }),

  filters: {
    date(value) {
      return moment(value)
        .locale("es")
        .format("DD/MM/YYYY");
    }
  },

  computed: {
    formTitle() {
      return this.edit === false ? "Nuevo gasto" : "Editar gasto";
    },
    ItemsExpenses() {
      return this.$store.getters["expenses/GET_EXPENSES"];
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
    this.type_expenses();
    this.type_payment();
  },

  methods: {
    async initialize() {
      try {
        const response = await this.$store.dispatch("expenses/INDEX");
        
      } catch (error) {
        console.log(error);
      }
    },

    async type_expenses() {
      try {
        const response = await this.$store.dispatch("type_expenses/INDEX");
      } catch (error) {
        console.log(error);
      }
    },

    async type_payment() {
      try {
        const response = await this.$store.dispatch("customer/TYPE_PAYMENT");
        
      } catch (error) {
        console.log(error);
      }
    },

    eventdialog(message) {
      if (message === "registro") {
        Swal.fire({
          icon: "success",
          title: "Gasto creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        Swal.fire({
          icon: "success",
          title: "Gasto editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },

    registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },

    editItem(item) {
      this.data_edit = {
        ...item,
        position_array: this.ItemsExpenses.indexOf(item)
      };

      this.active = true;
      this.edit = true;
    },

    async HandlerDeleteItem(item) {
      try {
        Swal.fire({
          title: "Estas seguro?",
          text: "No sera posible revertir este proceso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
          cancelButtonText: "Cancelar"
        }).then(result => {
          if (result.value) {
            this.deleteItem(item);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItem(item) {
      try {
        const request = {
          position_array: this.ItemsExpenses.indexOf(item),
          ...item
        };
        await this.$store.dispatch("expenses/DELETE", request);
        Swal.fire(
          "Eliminado!",
          "El gasto ha sido eliminado con exitos",
          "success"
        );
      } catch (error) {
        Swal.fire(
          "Eliminado!",
          "Ha ocurrido un error eliminando el gasto",
          "error"
        );
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.edit = false;
      }, 300);
    },

    getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
};
</script>

<style>
.length_text {
  font-size: 1rem !important;
}
</style>
