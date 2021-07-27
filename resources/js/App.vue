<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {}
    },
}
</script>
<style>
.round {
  border-radius: 20px !important;
}
.shadow-large {
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15) !important;
}
.shadow-small {
    box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15) !important;  
}
.dark-blue--text {
    color: #035464 !important;
}

</style>