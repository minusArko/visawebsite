import { createWebHistory, createRouter } from 'vue-router'
import Mainpage from '@/components/Mainpage.vue'
import CnVisa from '@/components/CnVisa.vue'
import Apostille from '@/components/Apostille.vue'
import PassportRenewal from '@/components/PassportRenewal.vue'
import Notary from '@/components/Notary.vue'
import GreenCard from '@/components/GreenCard.vue'
import ReentryPermit from '@/components/ReentryPermit.vue'
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
    {
        path: '/greencard',
        name: 'GreenCard',
        component: GreenCard
    },
    {
        path: '/reentryPermit',
        name: 'ReentryPermit',
        component: ReentryPermit
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router