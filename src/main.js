import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router'
import "@/assets/styles/main.scss"
import i18n from './i18n'
import store from './store'
import axios from 'axios'
import moment from 'moment'

const lang = localStorage.getItem('lang') || 'ru';
axios.defaults.baseURL = 'https://admin-carsharing.devup.kz/api/';
axios.defaults.params = {
  'lang': lang,
};


const app = createApp(App)
app.use(VueRouter)
app.use(i18n)
app.use(store)
app.use(moment)
app.mount('#app')
