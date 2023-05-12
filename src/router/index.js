import { createWebHistory, createRouter } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import Contacts from '@/views/Contacts.vue';
import About from "@/views/About.vue"
import Tariffs from "@/views/Tariffs.vue"
import Condition from "@/views/Condition.vue"
import Account from "@/views/Account.vue"

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
    },
    {
        path: '/condition',
        name: 'condition',
        component: Condition
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

router.beforeEach((to, from, next) => {
    // document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('access_token')) {
        console.log('asasxs');
        next()
      } else {
        console.log('dddd');      
        next({ name: 'main-page' })
        return
      }
    } else {
      next()
    }
});

export default router