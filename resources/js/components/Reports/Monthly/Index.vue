1<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="1">
        <span class="headline dark-blue--text">Reporte mensual</span>
      </v-col>
      <v-divider class="mx-6" inset vertical></v-divider>
      <v-col cols="12" sm="6" md="3">
        <v-select
          :items="items"
          item-value="id"
          item-text="name"
          v-model="opc"
          label="Seleccione el tipo de reporte"
          @change="search"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              label="Rango de fecha"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dates" no-title range color="primary">
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="search">Aceptar</v-btn>
            <v-btn text @click="menu = false">Cancelar</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>

      <!-- <v-col cols="12" sm="6" md="3" v-if="opc == 2">
        <v-select
          :items="ItemsTypeExpenses"
          item-value="id"
          item-text="name"
          v-model="type_expense_id"
          label="Tipo de gasto"
          @change="search"
        ></v-select>
      </v-col>-->
      <!--  <v-col cols="12" sm="6" md="2" v-if="opc > 0">
        <v-btn color="secondary" @click="search" text rounded class="font-weight-bold">
          <v-icon class="mr-3">mdi-eye</v-icon>
          Buscar por fecha
        </v-btn>
      </v-col>-->
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right" v-if="opc > 0">
        <v-btn 
          :loading="loading_pdf" 
          color="green darken-3" 
          icon 
          dark 
          @click="jsexport">
          <v-icon large>mdi-file-excel</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="shadow-large round">
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="reports_data"
            hide-default-footer
            class="elevation-0"
          >
            <template v-slot:no-data>
              <v-alert color="secondary" dark type="info" dense class="mt-4">{{ text_table }}</v-alert>
            </template>
            <template v-slot:item.amount="{ item }">
              {{
              item.amount | currency
              }}
            </template>

            <template v-slot:item.quantity="{ item }">
              {{
              item.quantity | currency
              }}
            </template>

            <template v-slot:item.created_at="{ item }">
              <span>{{ item.created_at | date }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-right" v-if="opc != 0">
        <v-chip class="ma-2" color="green" text-color="white">TOTAL: {{ TotalCost | currency }}</v-chip>
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
    donation_id: 0,
    product_service_id: 0,
    type_expense_id: 0,
    loading: false,
    opc: "",
    loading_excel: false,
    loading_pdf: false,
    reports_data: [],
    text_table: "Debe indicar el tipo de reporte a visualizar",
    items: [
      {
        id: 1,
        name: "Ingresos",
      },
      {
        id: 2,
        name: "Gastos",
      },
    ],
    menu: false,
    dates: [],
    headers_expense: [
      {
        text: "Nombre de gasto",
        align: "left",
        sortable: false,
        value: "name",
        class: "text-uppercase",
      },
      {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "amount",
        class: "text-uppercase",
      },
    ],
    headers_invoice: [
      {
        text: "Nombre de donación",
        align: "left",
        sortable: false,
        value: "name",
        class: "text-uppercase",
      },
      {
        text: "Monto",
        align: "left",
        sortable: false,
        value: "amount",
        class: "text-uppercase",
      },
    ],
    headers: [],
    desserts: [],
  }),

  filters: {
    date(value) {
      return moment(value).locale("es").format("DD/MM/YYYY");
    },
  },

  computed: {
    formTitle() {
      return this.edit === false ? "Nueva Factura" : "Editar Factura";
    },
    ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    },
    itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypeExpenses() {
      return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
    },
    ItemsProductService() {
      return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
    },
    TotalCost() {
      return this.$store.getters["reports/GET_TOTAL_COST"];
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.donation();
    this.type_expenses();
    this.product_service();
  },

  methods: {
    jsexport() {
      // URL Falsa para descargar
      let csvContent = "data:text/csv;charset=utf-8,";

      // formatos
      const delimiter = ";";
      const fixedDecimal = 2;

      // cabecera
      let csvHeader = [["Reporte Mensual"]];

      csvHeader.forEach((rowArray) => {
        let row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      });

      csvHeader[0] = [];

      this.headers.forEach((index, key) => {
        csvHeader[0].push(index.text);
      });

      // cuerpo
      let csvBody = [];
      let name = "";

      this.reports_data.forEach((element, key) => {
        // columna padre
        const dispFatherRowArray = [];
        const name = element.name
        dispFatherRowArray.push(name.replace(';', 'n'));
        dispFatherRowArray.push(parseFloat(element.amount).toFixed(2));

            csvBody.push(dispFatherRowArray);
        // inserta columna padre
        if ((this.reports_data.length - 1) == key) {
        const dispFatherRowArray = [];

            dispFatherRowArray.push('Total');
            dispFatherRowArray.push(parseFloat(this.TotalCost).toFixed(2));
            csvBody.push(dispFatherRowArray);

        }
      });

      

      // añadir resultados url falsa

      csvHeader.forEach((rowArray) => {
        let row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      });
      csvBody.forEach((rowArray) => {
        let row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      });

      // primera *****************************************

      const nameCSV = "reporte_mensual.csv";
      // generar elemento del dom para poner el enlace
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", nameCSV);
      document.body.appendChild(link); // Required for FF
      // darle click
      link.click();
    },
    async type_expenses() {
      try {
        const response = await this.$store.dispatch("type_expenses/INDEX");
      } catch (error) {
        console.log(error);
      }
    },
    async product_service() {
      try {
        const response = await this.$store.dispatch("product_service/INDEX");
      } catch (error) {
        console.log(error);
      }
    },
    async search() {
      try {
        this.loading = true;

        if (this.dates[0] > this.dates[1] && this.menu == true) {
          let num_1 = this.dates[0];
          let num_2 = this.dates[1];
          this.dates[0] = num_2;
          this.dates[1] = num_1;
        }

        let ini = "";
        let end = "";
        if (this.dates.length > 0) {
          ini = this.dates[0];
          end = this.dates[1];
        } else {
          ini = 0;
          end = 0;
        }

        this.menu = this.menu == true ? false : false;


        const request = {
          opc: this.opc,
          ini: ini,
          end: end,
          donation_id: this.opc == 1 ? this.donation_id : 0,
          product_service_id: this.opc == 2 ? this.product_service_id : 0,
          type_expense_id: this.opc == 2 ? this.type_expense_id : 0,
          export: 0,
        };

        const response = await this.$store.dispatch(
          "reports/FILTER_INVOICE_EXPENSES_MONTHLY",
          request
        );

        this.loading = false;

        if (this.opc == 1) {
          this.headers = this.headers_invoice;
          this.reports_data = this.group_invoises(response);
        } else {
          this.headers = this.headers_expense;
          this.reports_data = this.group_expenses(response);
        }
      } catch (error) {
        this.loading = false;

        console.log(error);
      }
    },
    async export_pdf_excel(name) {
      let export_type = "";
      if (name == "pdf") {
        this.loading_pdf = true;
        export_type = 3;
      } else {
        this.loading_excel = true;
        export_type = 4;
      }

      if (this.dates[0] > this.dates[1] && this.menu == true) {
        let num_1 = this.dates[0];
        let num_2 = this.dates[1];
        this.dates[0] = num_2;
        this.dates[1] = num_1;
      }

      let ini = 0;
      let end = 0;
      if (this.dates.length > 0) {
        ini = this.dates[0];
        end = this.dates[1];
      }

      const request = {
        opc: this.opc,
        ini: ini,
        end: end,
        donation_id: this.opc == 1 ? this.donation_id : 0,
        product_service_id: this.opc == 2 ? this.product_service_id : 0,
        type_expense_id: this.opc == 2 ? this.type_expense_id : 0,
        export: export_type,
      };
      // const url = `${process.env.MIX_APP_URL}/api/${item.id}/view`;

      // window.open(url,"_blank")
      // const request = {
      //   opc: this.opc,
      //   dates: this.dates,
      //   export: export_type
      // }

      axios({
        method: "get",
        url: `${process.env.MIX_APP_URL}/api/filter/${request.opc}/${request.ini}/${request.end}/${request.donation_id}/${request.product_service_id}/${request.type_expense_id}/${request.export}`,
        responseType: "arraybuffer",
        headers: {
          Authorization: ` Bearer ${localStorage.getItem("token")}`,
        },
        data: request,
      })
        .then((response) => {
          this.loading = false;
          this.forceFileDownload(response, name);

          if (name == "pdf") {
            this.loading_pdf = false;
          } else {
            this.loading_excel = false;
          }
        })
        .catch((error) => {
          if (name == "pdf") {
            this.loading_pdf = false;
          } else {
            this.loading_excel = false;
          }
          console.log("error occured", error);
        });
    },

    forceFileDownload(response, name) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `reports${moment(new Date()).locale("es").format("DD/MM/YYYY")}.${name}`
      );
      //or any other extension
      document.body.appendChild(link);
      link.click();
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
          title: "Factura creado con exito",
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        Swal.fire({
          icon: "success",
          title: "Factura editado con exito",
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
          title: "Estas seguro?",
          text: "No sera posible revertir este proceso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
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
          "Eliminado!",
          "La factura ha sido eliminado con exitos",
          "success"
        );
      } catch (error) {
        Swal.fire(
          "Eliminado!",
          "Ha ocurrido un error eliminando la factura",
          "error"
        );
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
      } catch (error) {
        console.log(error);
        let email_error = error.response.data.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: email_error,
          confirmButtonColor: "#00BCD4",
        });
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
    },
    groupBy(arr, props, acum) {
      const elements = arr.reduce((groups, item) => {
        const keys_prop = props.split(".");
        var val = item;

        for (let i = 0; i < keys_prop.length; i++) {
          val = val[keys_prop[i]];
        }

        groups[val] = groups[val] || { amount: 0, name: val };
        groups[val].amount += item[acum];

        return groups;
      }, {});

      const keys = Object.keys(elements);

      return keys.length > 0 ? keys.map((x) => elements[x]) : [];
    },
    group_expenses(reports) {
      const group = this.groupBy(
        reports,
        "type_expenses.product_or_service.name",
        "quantity"
      );
      return group;
    },
    group_invoises(reports) {
      const donations = reports
        .reduce((accumulator, currentValue) => {
          accumulator = accumulator.concat(currentValue.donations_invoice);
          return accumulator;
        }, [])
        .reduce((accumulator, currentValue) => {
          accumulator[currentValue.donation.name_of_income] =
            accumulator[currentValue.donation.name_of_income] +
              currentValue.amount * parseFloat(currentValue.quantity) ||
            currentValue.amount * parseFloat(currentValue.quantity);
          return accumulator;
        }, {});

      const group = [];

      for (const key in donations) {
        if (donations.hasOwnProperty(key)) {
          group.push({
            name: key,
            amount: donations[key],
          });
        }
      }
      // const group = this.groupBy(reports, "donations_invoice.donation.0.name_of_income", "amount");

      return group;
    },
  },
};
</script>

<style>
.length_text {
  font-size: 1rem !important;
}
</style>
