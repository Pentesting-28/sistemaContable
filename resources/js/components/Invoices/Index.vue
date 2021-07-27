<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar flat color="transparent" class="round">
          <v-toolbar-title class="headline mb-2 dark-blue--text">Ingresos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn
            v-if="itemCompany.length > 0"
            rounded
            text
            color="secondary"
            class="mb-2 font-weight-bold"
            @click="registerItem"
            dark
          >
            <v-icon class="mr-3">mdi-account-plus</v-icon>Nuevo
            Ingreso
          </v-btn>

          <span v-else>
            Debe tener registrada la empresa para poder crear
            ingresos
          </span>

          <dialogCustomer
            v-if="active"
            :active="active"
            :editedItem="data_edit"
            :edit="edit"
            @dialog:change="eventdialog"
          ></dialogCustomer>
        </v-toolbar>
        <v-card class="shadow-large round">
          <v-data-table :headers="headers" :items="ItemsInvoice" class="elevation-0">
            <template v-slot:item.amount="{ item }">{{ item.amount | currency }}</template>

            <template v-slot:item.created_at="{ item }">
              <span>{{ item.created_at | date }}</span>
            </template>

            <template v-slot:item.status="{ item }">
              <v-chip
                class="ma-2"
                :color="
                                    item.status == 1 ? 'teal' : 'red darken-2'
                                "
                dark
              >
                <span>{{ item.status | status_active }}</span>
              </v-chip>
            </template>

            <template v-slot:item.action="{ item }">
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  v-if="item.status == 1"
                  text
                  icon
                  :color="hover ? 'red' : 'blue-grey'"
                  @click="HandlerDeleteItem(item, 1)"
                >
                  <v-tooltip color="gray lighten-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-account-remove</v-icon>
                    </template>
                    <span>Cambiar estatus del ingreso</span>
                  </v-tooltip>
                </v-btn>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  text
                  icon
                  :loading="loadingEmail"
                  :color="hover ? 'indigo' : 'blue-grey'"
                  @click="sendMail(item)"
                >
                  <v-tooltip color="gray lighten-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-mail</v-icon>
                    </template>
                    <span>Enviar correo</span>
                  </v-tooltip>
                </v-btn>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  text
                  icon
                  :color="hover ? 'red darken-4' : 'blue-grey'"
                  target="_blank"
                  :href="pdf(item)"
                >
                  <v-tooltip color="gray lighten-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-file-pdf</v-icon>
                    </template>
                    <span>Descargar archivo</span>
                  </v-tooltip>
                </v-btn>
              </v-hover>
              <v-hover v-slot:default="{ hover }" v-if="item.client.cellular != null">
                <v-btn
                  text
                  icon
                  :color="hover ? 'success' : 'blue-grey'"
                  @click="whatsappSend(item)"
                >
                  <v-tooltip color="gray lighten-1" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-whatsapp</v-icon>
                    </template>
                    <span>Enviar whatsapp</span>
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
import dialogCustomer from "./Dialog";
import moment from "moment";
import axios from "axios";

export default {
  components: {
    dialogCustomer,
  },

  data: () => ({
    url_pdf: "",
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
    loadingEmail: false,
    headers: [
      {
        text: "Nombre del cliente",
        align: "left",
        sortable: false,
        value: "client.name",
        class: "text-uppercase",
      },
      {
        text: "Monto",
        align: "left",
        sortable: false,
        value: "amount",
        class: "text-uppercase",
      },
      {
        text: "Estatus",
        align: "left",
        sortable: false,
        value: "status",
        class: "text-uppercase",
      },
      {
        text: "Fecha",
        align: "left",
        sortable: false,
        value: "created_at",
        class: "text-uppercase",
      },
      // { text: 'Teléfono residencial', align: 'left', sortable: false, value: 'residential_phone', class: 'text-uppercase'},
      // { text: 'Correo', align: 'left', sortable: false, value: 'email', class: 'text-uppercase'},
      {
        text: "Acciones",
        value: "action",
        sortable: false,
        class: "text-uppercase",
      },
    ],
    desserts: [],
  }),

  filters: {
    date(value) {
      return moment(value).locale("es").format("DD/MM/YYYY");
    },
    status_active(value) {
      if (value == 1) {
        return "Activa";
      } else {
        return "Anulada";
      }
    },
  },

  computed: {
    formTitle() {
      return this.edit === false ? "Nuevo Ingreso" : "Editar Ingreso";
    },
    ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    },
    itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    // ItemsDonation() {
    //   return this.$store.getters["donations/GET_DONATION"];
    // },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
    this.company();
    this.donation();
    this.type_payment();
    this.client();
  },

  methods: {
    whatsappSend(item) {
      const url = "https://api.whatsapp.com/send?";
      const url_server = process.env.MIX_APP_URL;
      const message = `Hemos recibido tu donacion porfavor visita el siguiente enlace para conocer mas detalles de la misma: ${url_server}/get_invoice/${item.id}`;

      window.open(`${url}phone=+507 ${item.client.cellular}&text=${message}`);
    },
    async initialize() {
      try {
        const response = await this.$store.dispatch("invoice/INDEX");
      } catch (error) {
        console.log(error);
      }
    },

    async company() {
      try {
        const response = await this.$store.dispatch("company/INDEX");
        
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

    async donation() {
      try {
        const response = await this.$store.dispatch("donations/INDEX");
      } catch (error) {
        console.log(error);
      }
    },

    async client() {
      try {
        const response = await this.$store.dispatch("customer/INDEX");
      } catch (error) {
        console.log(error);
      }
    },

    eventdialog(message) {
      if (message === "registro") {
        Swal.fire({
          icon: "success",
          title: "Ingreso creado con exito",
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        Swal.fire({
          icon: "success",
          title: "Ingreso editado con exito",
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
        name_client: item.client.name,
        type_payment_id: item.collect_money.type_payment_id,
        amount: "",
        position_array: this.ItemsInvoice.indexOf(item),
      };

      this.active = true;
      this.edit = true;
    },

    async HandlerDeleteItem(item) {
      try {
        Swal.fire({
          title: "Estas seguro de anular el ingreso?",
          text: "No sera posible revertir este proceso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00BCD4",
          cancelButtonColor: "grey",
          confirmButtonText: "Anular",
          cancelButtonText: "Cancelar",
        }).then((result) => {
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
          position_array: this.ItemsInvoice.indexOf(item),
          ...item,
        };
        await this.$store.dispatch("invoice/DELETE", request);
        Swal.fire(
          "Anulada!",
          "La ingreso ha sido anulada con exito",
          "success"
        );
      } catch (error) {
        Swal.fire("Opps!", "Ha ocurrido un error anulando la ingreso", "error");
      }
    },


    sendMail(item) {
      Swal.fire({
        title: "Esta seguro que desea enviar el correo electrónico",
        text: "No podra revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        cancelButtonColor: "grey",
        confirmButtonText: "Si",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          this.loadingEmail = true;

          this.mail(item);
        }
      });
    },

    async mail(item) {
      try {
        const request = {
          id: item.id,
        };
        const response = await this.$store.dispatch(
          "invoice/SEND_MAIL",
          request
        );
        Swal.fire({
          title: "Enviado!",
          text: response.message,
          icon: "success",
          confirmButtonColor: "#00BCD4",
        });
        this.loadingEmail = false;


      } catch (error) {
        console.log(error);
        this.loadingEmail = false;

        let email_error = error.response.data.message;
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: email_error,
          confirmButtonColor: "#00BCD4",
        });
      }
    },

    pdf(item) {
      return `${process.env.MIX_APP_URL}/api/invoice/${item.id}/view`;
    },

    forceFileDownload(response, item) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${item.client.name.replace(" ", "_")}${moment(item.created_at)
          .locale("es")
          .format("DD/MM/YYYY")}.pdf`
      );
      //or any other extension
      document.body.appendChild(link);
      link.click();
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
    },
  },
};
</script>

<style>
.length_text {
  font-size: 1rem !important;
}
</style>
