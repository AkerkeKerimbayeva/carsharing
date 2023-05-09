import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router'
import "@/assets/styles/main.scss"
import i18n from './i18n'
const lang = localStorage.getItem('lang') || 'ru';
// axios.defaults.baseURL = '';
// axios.defaults.params = {
//   'lang': lang,
// };


const app = createApp(App)
app.use(VueRouter)
app.use(i18n)
app.mount('#app')
