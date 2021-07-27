<template>
  <section class="custom">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col md="10">
          <v-card class="shadow-large round px-5 pt-5">
            <div class="d-flex align-center pb-0">
                <img src="../assets/img/Logotipo_oficial.png" contain width="200" alt="logo_sebastian" />
                <v-spacer></v-spacer>
                <div class="text-right">
                    <!-- <h2 class="display-1 mb-2 dark-blue--text">Datos de la donación</h2> -->
                    <p class="mb-0">Recibo de caja: #{{data.number}}</p>
                    <p >Elaborado: {{data.created_at | date}}</p>
                    <v-divider></v-divider>
                </div>
            </div>
            <div v-if="data.client !== undefined" class="text-right">
                <p class="mb-0"> 
                    {{data.client.name}}                
                </p> 
                <p class="mb-0">
                    {{data.client.dni}}
                </p>
                <p class="mb-0">
                    {{data.client.email}}
                </p>
            </div>
            <v-divider></v-divider>
            <v-card-text>
              <!-- <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title v-if="data.client"
                                        >Usuario: {{ data.client.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-row>
                                <v-col
                                    md="4"
                                    v-for="(item,
                                    index) in data.donations_invoice"
                                    :key="index"
                                >
                                    <v-list>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >Tipo de donacion:
                                                </v-list-item-title>
                                                <v-list-item-subtitle>{{
                                                    item.donation.name_of_income
                                                }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >Cantidad:
                                                </v-list-item-title>
                                                <v-list-item-subtitle>{{
                                                    item.quantity
                                                }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >Monto:
                                                </v-list-item-title>
                                                <v-list-item-subtitle>{{
                                                    item.amount
                                                }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >Subtotal:
                                                </v-list-item-title>
                                                <v-list-item-subtitle>{{
                                                    (item.quantity *
                                                        item.amount)
                                                        | currency
                                                }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
              <v-divider></v-divider>-->
              <v-data-table
                :headers="headers"
                :items="data.donations_invoice"
                hide-default-footer
                class="elevation-0"
              >
                <template v-slot:item.amount="{ item }">{{ item.amount | currency }}</template>
                <template v-slot:item.id="{ item }">{{ (item.quantity * item.amount) | currency }}</template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <span class="headline text-right">Total: {{ data.amount | currency }}</span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      data: [],
      headers: [
        {
          text: "Tipo de donación",
          align: "left",
          sortable: false,
          value: "donation.name_of_income",
          class: "text-uppercase",
        },
        {
          text: "Cantidad",
          align: "left",
          sortable: false,
          value: "quantity",
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
          text: "Subtotal",
          align: "left",
          sortable: false,
          value: "id",
          class: "text-uppercase",
        },
      ],
    };
  },
  filters: {
      date(value) {
          return moment(value).format('DD/MM/YYYY h:mm a')
      }
  },
  async created() {
    try {
      const request = { id: this.$route.params.id };
      const response = await this.$store.dispatch(
        "invoice/GET_ONE_INVOICE",
        request
      );
      this.data = response;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.custom {
  background-color: #f5f5f5;
  height: 100%;
}
</style>
