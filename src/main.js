import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router'
import "@/assets/styles/main.scss"

// axios.defaults.baseURL = 'https://back-celebra.mydev.kz/api/';

const app = createApp(App)
app.use(VueRouter)
app.mount('#app')
