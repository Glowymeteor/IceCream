<template>


   <!-- <p> In this series, we will use the following frameworks:</p> -->

    <Layout>
        <h1 class="text-4xl font-bold">Users</h1>

        <div style="margin-top: 1500px;">
            <p>The Current Time is {{ time }}.</p>

            <Link href="/users" class="text-blue-500" preserve-scroll>
                Refresh
            </Link>


        </div>

    </Layout>

  </template>

  <script>
    import Layout from '../Shared/Layout.vue';
    import Link from '@inertiajs/inertia-vue3'

    export default {

        components: {Layout, Link},


        props: {
            name: String,

            frameworks: Array,

            time: String,
        },
    };
  </script>
