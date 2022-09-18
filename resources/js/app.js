import '../css/app.css';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';

createInertiaApp({
    resolve: name => {
        //require(`./Pages/${name}`)

        let page = require(`./Pages/${name}`).default;

        return page;
    } ,
    setup({ el, App, props, plugin }) {
      createApp({ render: () => h(App, props) })
        .use(plugin)
        .component(Link, "Link")
        .mount(el)
    },
  });

InertiaProgress.init({
    delay: 0,
    color: 'red',
    showSpinner: true,
});
