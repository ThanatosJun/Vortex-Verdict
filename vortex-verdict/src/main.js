import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "@/assets/css/bootstrap.css"
import '@fortawesome/fontawesome-free/css/all.css';

import router from "./router.js"

const app = createApp(App)

app.use(router)
app.mount('#app')
