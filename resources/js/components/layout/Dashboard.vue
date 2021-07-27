<template>
    <v-container fluid class="pt-0">
        <Summary />
        <v-row>
            <v-col cols="12">
                <div>
                    <v-app-bar
                        color="secondary"
                        class="border-rounded"
                        dense
                        dark
                    >
                        <v-toolbar-title>Ingresos</v-toolbar-title>
                    </v-app-bar>
                </div>
            </v-col>
            <v-col cols="12" md="7" v-if="render">
                <BarChart :data="expenses" />
            </v-col>
            <v-col cols="12" md="5" v-if="render">
                <TableDetail :data="expenses_detail" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <v-app-bar
                        color="secondary"
                        class="border-rounded"
                        dense
                        dark
                    >
                        <v-toolbar-title>Gastos</v-toolbar-title>
                    </v-app-bar>
                </div>
            </v-col>
            <v-col cols="12" md="5" v-if="render">
                <TableDetail :data="invoices_detail" />
            </v-col>
            <v-col cols="12" md="7" v-if="render">
                <BarChart :data="invoices" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import BarChart from "../Dashboard/BarChart";
import DonutChart from "../Dashboard/DonutChart";
import Summary from "../Dashboard/Summary";
import TableDetail from "../Dashboard/TableDetail";

export default {
    components: {
        BarChart,
        DonutChart,
        Summary,
        TableDetail
    },
    data: () => ({
        render: false
    }),
    computed: {
        expenses() {
            const report = this.$store.getters["reports/GET_EXPENSES"];
           const data_graph = this.group_invoises(report, "invoice")

           const data = data_graph.data
           const categories = data_graph.category

            return { data, categories, name: "Facturación" };
        },
        invoices() {
            const report = this.$store.getters["reports/GET_ENVOICES"];
            const categories = report
                .map(x => x.type_expenses.product_or_service.name)
                .filter((x, i, arr) => arr.indexOf(x) === i);
            var data = [];

            categories.forEach(element => {
                let elements = report.filter(
                    x => x.type_expenses.product_or_service.name === element
                );
                let total = elements.reduce((acum, x) => acum + x.quantity, 0);
                data.push(total);
            });

            return { data, categories, name: "Gastos" };
        },
        invoices_detail() {
            const report = this.$store.getters["reports/GET_ENVOICES"];
            const group = this.groupBy(
                report,
                "type_expenses.product_or_service.name",
                "quantity"
            );

            return group;
        },
        expenses_detail() {
            const report = this.$store.getters["reports/GET_EXPENSES"];
            const group = this.group_invoises(report, "details");

            return group;
        }
    },
    mounted() {
        this.render = true;
        this.inicialize();
    },
    created() {},
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
                    export: 0
                };

                const invoices = await this.$store.dispatch(
                    "reports/FILTER_INVOICE_EXPENSES",
                    request
                );
                request = {
                    ...request,
                    opc: 2
                };

                const expenses = await this.$store.dispatch(
                    "reports/FILTER_INVOICE_EXPENSES",
                    request
                );
            } catch (error) {
                console.log(error);
            }
        },

        groupBy: (arr, props, acum) => {
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

            return keys.length > 0 ? keys.map(x => elements[x]) : [];
        },
        group_invoises(reports, status) {
            const donations = reports
                .reduce((accumulator, currentValue) => {
                    accumulator = accumulator.concat(
                        currentValue.donations_invoice
                    );
                    return accumulator;
                }, [])
                .reduce((accumulator, currentValue) => {
                    accumulator[currentValue.donation.name_of_income] =
                        accumulator[currentValue.donation.name_of_income] +
                            currentValue.amount *
                                parseFloat(currentValue.quantity) ||
                        currentValue.amount * parseFloat(currentValue.quantity);
                    return accumulator;
                }, {});

            const group = [];
            const category = [];
            const data = [];

            for (const key in donations) {
                if (donations.hasOwnProperty(key)) {
                    category.push(key);
                    data.push(donations[key]);
                    group.push({
                        name: key,
                        amount: donations[key]
                    });
                }
            }
            // const group = this.groupBy(reports, "donations_invoice.donation.0.name_of_income", "amount");
            if (status == "details") {
                return group;
            } else {
                return {
                    category: category,
                    data: data
                };
            }
        }
    }
};
</script>
<style scoped>
.border-rounded {
    border-radius: 8px;
}
</style>
