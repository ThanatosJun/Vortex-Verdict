import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
// import "@/assets/css/bootstrap.css"
import '@fortawesome/fontawesome-free/css/all.css';
// import { BootstrapVueNext } from 'bootstrap-vue-next';

import router from "./router.js";

const app = createApp(App)

app.use(router)
app.mount('#app')