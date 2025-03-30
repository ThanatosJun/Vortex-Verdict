import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "@/assets/css/bootstrap.css"
import "@/assets/css/customStyle.css"
import '@fortawesome/fontawesome-free/css/all.css';
import router from "./router.js"

app.use(router)
app.mount('#app')
