<template>

    <nav>

        <ul class="flex list-disc space-x-4 list-inside">

            <li>
                <Link href= '/' class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.url == '/'}">
                    Home
                </Link>
            </li>



            <li>
                <Link href= '/users' class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.url.startsWith('/users')}">
                    Users
                </Link>
            </li>

            <li>
                <Link href= '/settings' class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.url.startsWith('/settings')}">
                    Settings
                </Link>
            </li>

            <li><Link href= '/logout' method="post" as="button" class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.url == '/logout'}">
                    Log Out
                </Link>
            </li>

        </ul>

    </nav>
  </template>

  <script>

    import { Link } from '@inertiajs/inertia-vue3';
    import NavLink from './NavLink.vue';

    export default {

        components: { Link, NavLink },
    };
  </script>
