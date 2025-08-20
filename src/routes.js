import { createWebHistory, createRouter } from 'vue-router'
import Mainpage from '@/components/Mainpage.vue'
import CnVisa from '@/components/CnVisa.vue'
import Apostille from '@/components/Apostille.vue'
import PassportRenewal from '@/components/PassportRenewal.vue'
import Notary from '@/components/Notary.vue'
 
const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Mainpage
    },
    {
        path: '/cnVisa',
        name: 'CNVisa',
        component: CnVisa
    },
    {
        path: '/apostille',
        name: 'Apostille',
        component: Apostille
    },
    {
        path: '/passport',
        name: 'PassportRenewal',
        component: PassportRenewal
    },
    {
        path: '/notary',
        name: 'Notary',
        component: Notary
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router