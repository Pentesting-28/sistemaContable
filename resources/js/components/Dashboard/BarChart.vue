
<template>
    <div>
        <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>

import apexchart from 'vue-apexcharts';

export default {
    components:{
        apexchart
    },
    props:["data"],
    data: function() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: []
                },
                dataLabels: {
                enabled: false,
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            if (value) {
                                const AMOUNT_FORMAT = new Intl.NumberFormat("en-US", {
                                    currency: "USD",
                                    style: "currency"
                                }).format(value);
                                return AMOUNT_FORMAT;
                            } else {
                                return ' ';
                            }
                        }
                    },
                }
            },
            series: [{
                name: '',
                data: []
            }]
        }
    },
    watch: {
        data(e){
            this.options = {...this.options, ...{
                xaxis: {categories : e.categories}
            }};
            this.series[0].data = e.data;
            this.series[0].name = e.name;
        }
    },
    methods: {
    },
    mounted(){

    }
};
</script>