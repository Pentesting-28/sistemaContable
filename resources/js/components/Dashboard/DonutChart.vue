
<template>
    <div>
        <apexchart width="100%" type="donut" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>

import apexchart from 'vue-apexcharts';

export default{
    components:{
        apexchart
    },
    data: function() {
        return {
        options: {},
        series: [44, 55, 41, 17, 15],
        chartOptions: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
            }

        }
    }
};
</script>