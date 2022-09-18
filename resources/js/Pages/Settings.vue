<template>

    <Layout>

        <h1 class="text-4xl font-bold">
            Settings n shit
        </h1>


    </Layout>


  </template>

  <script>

    import Layout from '../Shared/Layout.vue';

    export default {

        components: {Layout},


        props: {
            name: String,

            frameworks: Array,
        },
    };
  </script>


