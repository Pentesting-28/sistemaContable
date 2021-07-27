<template>
    <div class="container">
        se debe tener el cuenta q todos los componentes solo deben poseer una etiqueta padre
        ejemplo este div con class container.
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <v-alert type="success">
                      I'm a success alert.
                    </v-alert>
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        Hola jose termine el video.

                        probemos vuetify
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
