import './assets/main.css'

import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import { createI18n } from 'vue-i18n'

const i18n = createI18n ({
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': {
            navTitle: 'Jing\'s Travel Services',
            navHome: 'Home',
            navServices: 'Services',
            navContact: 'Contact',
            servicesTitle: 'My Services',
            visaTitle: 'Chinese Visa',
            visaPrice: '$340, increased price for express service',
            visaDescription: 'Get your Chinese visa processed quickly and efficiently. Various types of visas available, including Q2 (family visit), L (tourist), and work visas.',
            apostilleTitle: 'Apostille',
            apostillePrice: 'Case by case',
            apostilleDescription: 'Apostille services for documents such as birth certificates, marriage licenses',
            passportTitle: 'Passport Renewal',
            passportPrice: '$140, increased price for express service',
            passportDescription: 'Renew your passport quickly and easily through our service.',
            notaryTitle: 'Notary',
            notaryPrice: 'Case by case',
            notaryDescription: 'Notary services for various documents, including affidavits and power of attorney.',
            planeTitle: 'Travel and Plane Booking',
            planePrice: 'Case by case',
            planeDescription: 'Assistance with travel arrangements and plane bookings.',
            contactTitle: 'Contacts',
            location: 'Location',
            locationDescription: 'Pacific Asian Plaza, 5115 Spring Mountain Rd, Las Vegas #201k',
            email: 'Email',
            phone: 'Phone',
        },
        'zh-CN': {
            navTitle: 'Jing\'s Travel Services',
            navHome: '首页',
            navServices: '服务',
            navContact: '联系',
            servicesTitle: '我的服务',
            visaTitle: '中国签证',
            visaPrice: '$340, 快递服务价格上涨',
            visaDescription: '快速高效地办理您的中国签证。提供多种类型的签证, 包括Q2 (探亲签证), L(旅游签证）和工作签证。',
            apostilleTitle: '海牙认证',
            apostillePrice: '个案处理',
            apostilleDescription: '为出生证明、结婚证等文件提供认证服务',
            passportTitle: '护照续签',
            passportPrice: '$140, 快递服务价格上涨',
            passportDescription: '通过我们的服务，您可以快速便捷地办理护照续签。',
            notaryTitle: '公证员',
            notaryPrice: '个案处理',
            notaryDescription: '公证服务，涵盖各类文件，包括宣誓书和授权书。',
            planeTitle: '机票预订',
            planePrice: '个案处理',
            planeDescription: '协助安排旅行事宜及机票预订。',
            contactTitle: '联系人',
            location: '位置',
            locationDescription: 'Pacific Asian Plaza, 5115 Spring Mountain Rd, Las Vegas #201k',
            email: '电子邮件',
            phone: '电话',
        },
    }
})

const app = createApp(App)
app.use((createBootstrap()))
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(i18n)
app.mount('#app')
