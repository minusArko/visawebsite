import { createMemoryHistory, createRouter } from 'vue-router'
import Mainpage from '@/components/Mainpage.vue'
import CnVisa from '@/components/CnVisa.vue'

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
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router