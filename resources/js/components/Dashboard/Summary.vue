<template>
  <v-row> 
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12" sm="3" md="3">
          <v-card
            :color="item.color"
            dark
            flat
            class="shadow-large round"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="pl-2 d-flex flex-column justify-center">
                <span
                  class="body pl-2 grey--text"
                  v-text="item.title"
                ></span>

                <h3 class="pl-2 pt-3 grey--text" v-if="item.isAmount">{{ item.text | currency}}</h3> 
                <h3 class="pl-2 pt-3 grey--text" v-if="!item.isAmount">{{ item.text }}</h3> 
              </div>

              <v-avatar
                class="ma-1"
                size="80"
                tile
              >
                <v-img :src="item.src" contain></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
  export default {
    props:["totals"],
    data: () => ({
        items: [],
    }),
    mounted(){
        this.inicialize()
    },
      methods: {
    async inicialize() {
      try {

        let request = {
          opc: 1,
          ini: 0,
          end: 0,
          donation_id: 0,
          product_service_id: 0,
          type_expense_id: 0,
          export: 0,
        }

        const invoices = await this.$store.dispatch("reports/FILTER_INVOICE_EXPENSES", request);
        const total_invoice = invoices.reduce((acum, x) => x.amount + acum, 0);
        request = {
          ...request,
          opc:2
        };

        const expenses = await this.$store.dispatch("reports/FILTER_INVOICE_EXPENSES", request);
        const total_expense = expenses.reduce((acum, x) => x.quantity + acum, 0);

        const clients = await this.$store.dispatch("customer/INDEX");
        
        this.items = [
            {
            color: 'white',
            src: "../img/donations.svg",
            title: 'Ingresos',
            text: total_invoice,
            isAmount: true
            },
            {
            color: 'white',
            src: "../img/expense.svg",
            title: 'Gastos',
            text: total_expense,
            isAmount: true
            },
            {
            color: 'white',
            src: "../img/undraw_interview.svg",
            title: 'Clientes',
            text: clients.length,
            isAmount: false
            },
            {
            color: 'white',
            src: "../img/balance.svg",
            title: 'Balance',
            text: total_invoice - total_expense,
            isAmount: true
            },
        ]

      } catch (error) {
        console.log(error);
      }
    }
  }
  }
</script>
<style>
.border-rounded {
  border-radius: 8px;
}
</style>
