import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {path: '', 
     name: 'home',
     component: () => import('../views/Home.vue')
    },
    {path: '/street', 
     name: 'street',
     component: () => import('../views/Street.vue')
    },
    {path: '/landscape', 
     name: 'landscape',
     component: () => import('../views/Landscape.vue')
    },
    {path: '/portraits', 
     name: 'portraits',
     component: () => import('../views/Portraits.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            setTimeout(() => {
                const element = document.querySelector(to.hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
            }, 100);
        } else {
            return { top: 0, behavior: 'smooth' };
        }
}

    // scrollBehavior(to, from, savedPosition) {
    //         return { 
    //             top:0,
    //             behavior: 'smooth'
    //         }
    //     }
})

export default router