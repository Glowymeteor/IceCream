<template>

        <h1 class="text-3xl font-bold">
            Welcome to the home page,  {{name}}
        </h1>





</template>

  <script>







import Layout from '../Shared/Layout.vue';

    export default {

        //components: { Layout },

        layout: Layout,


        props: {
            name: String,

            frameworks: Array,

        },
    };
  </script>
