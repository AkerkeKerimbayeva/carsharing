import { createWebHistory, createRouter } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import Contacts from '@/views/Contacts.vue';
import About from "@/views/About.vue"
import Tariffs from "@/views/Tariffs.vue"

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/tariffs',
        name: 'tariffs',
        component: Tariffs
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router