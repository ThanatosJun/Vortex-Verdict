import { createApp } from 'vue'
import App from './App.vue'
import router from "./src/router.js"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "@/assets/css/bootstrap.css"
import "@/assets/css/customStyle.css"
import '@fortawesome/fontawesome-free/css/all.css';



const app = createApp(App)
app.use(router)
app.mount('#app')
