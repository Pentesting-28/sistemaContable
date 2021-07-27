<template>
    <v-card class="shadow-large round">
        <v-data-table 
        :headers="headers" 
        :items="records" 
        hide-default-footer
        class="elevation-0">
        <template v-slot:item.amount="{ item }">{{item.amount | currency}}</template>

        <template v-slot:item.quantity="{ item }">{{item.quantity | currency}}</template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props:["data", "opc"],
  data: () => ({
      records:[],
    headers: [
      {
        text: "Nombre",
        align: "left",
        sortable: false,
        value: "name",
        class: "text-uppercase"
      },
      {
        text: "Cantidad",
        align: "right",
        sortable: false,
        value: "amount",
        class: "text-uppercase"
      }
    ],
  }),

  computed: {
  },

  watch: {
    data(val) {
        if(val.length > 0 && Object.keys(val[0]).length > 0){
            this.records = val;
        }
    }
  },

  mounted() {
  },

  methods: {

  }
};
</script>

<style>
.length_text {
  font-size: 1rem !important;
}
</style>
