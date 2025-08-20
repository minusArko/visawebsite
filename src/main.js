import './assets/main.css'

import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import { createI18n } from 'vue-i18n'
import { createMemoryHistory, createRouter } from 'vue-router'
import router from './routes.js'

const i18n = createI18n ({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': {
            navTitle: 'Jing\'s Visa Services',
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
            greenCardTitle: 'Green Card Renewal',
            greenCardDescription: 'Assistance with Green Card renewal applications.',
            greenCardPrice: 'Case by case',
            reentryPermitTitle: 'Reentry Permit',
            reentryPermitDescription: 'Assistance with reentry permit applications.',
            reentryPermitPrice: 'Case by case',
            location: 'Location',
            locationDescription: 'Pacific Asian Plaza, 5115 Spring Mountain Rd, Las Vegas #201k',
            email: 'Email',
            phone: 'Phone',
            learnMore: 'Learn More',
            visaMoreInfo: `
                <h2>Documents to bring:</h2>
                
                <h3>For L (tourism) visas:</h3>
                <ol>
                    <li>ID/Driver's license</li>
                    <li>Current passport (with a minimum of 2 blank visa pages)</li>
                </ol>
                
                <h3>For Q2/Q1 (family visit) visas:</h3>
                <ol>
                    <li>ID/Driver's license</li>
                    <li>Current passport (with a minimum of 2 blank visa pages)</li>
                    <li>Invitation letter issued by a Chinese citizen</li>
                    <li>Picture/Photocopy of inviter's Chinese ID</li>
                </ol>
                
                <h3>For first time visa application for minors below the age of 18:</h3>
                <ol>
                    <li>Current passport</li>
                    <li>Parents/guardian's passports</li>
                    <li>If the minor has changed their name, please provide relevant documents.</li>
                </ol>
                
                <h3>For those unable to come in office:</h3>
                <ol>
                    <li>Fill out the online form at following link:<br>
                        <a href="https://cova.mfa.gov.cn/qzCoCommonController.do?show&pageId=index&locale=en_US" target="_blank">
                            https://cova.mfa.gov.cn/qzCoCommonController.do?show&pageId=index&locale=en_US
                        </a>
                    </li>
                    <li>Select North America, then San Francisco</li>
                    <li>Upon completion of the form, do not submit the form and contact us with the application number along with the passport number used with the application. We will review and submit the application for you.</li>
                </ol>`,
            passportMoreInfo: `
                <h2>Documents to bring:</h2>
                
                <h3>For standard american issued passports:</h3>
                <ol>
                    <li>ID/Driver's License</li>
                    <li>Current passport</li>
                </ol>
                
                <h3>For Chinese passports:</h3>
                <ol>
                    <li>ID/Driver's License</li>
                    <li>Green card</li>
                    <li>Chinese ID</li>
                    <li>Address and contact in China</li>
                </ol>
                
                <h3>For Chinese passports for applicants under 16:</h3>
                <ol>
                    <li>Birth certificate</li>
                    <li>ID and/or Chinese ID of both parents</li>
                    <li>Consent letter</li>
                </ol>
            `,
            reentryPermitMoreInfo: `
                <h2>Documents to bring:</h2>
                
                <ol>
                    <li>Passport with minimum of 2 visa pages</li>
                    <li>Green card</li>
                    <li>ID/Driver's License</li>
                    <li>Social Security Card/Number</li>
                </ol>
            `,
            greenCardMoreInfo: `
                <h2>Documents to bring:</h2>
                
                <ol>
                    <li>Green Card</li>
                    <li>ID/Driver's License</li>
                    <li>Social Security Card/Number</li>
                    <li>Current passport</li>
                </ol>
            `,

            },
        'zh-CN': {
            navTitle: 'Jing\'s Visa Services',
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
            greenCardTitle: '绿卡续签',
            greenCardPrice: '个案处理',
            greenCardDescription: '协助办理绿卡续签申请。',
            reentryPermitTitle: '再入境许可',
            reentryPermitPrice: '个案处理',
            reentryPermitDescription: '协助办理再入境许可申请。',
            contactTitle: '联系人',
            location: '位置',
            locationDescription: 'Pacific Asian Plaza, 5115 Spring Mountain Rd, Las Vegas #201k',
            email: '电子邮件',
            phone: '电话',
            learnMore: '其他信息',
            visaMoreInfo: `
                <h2>需要携带的文件：</h2>
                
                <h3>L（旅游）签证：</h3>
                <ol>
                    <li>身份证/驾驶执照</li>
                    <li>有效护照（至少有2页空白签证页）</li>
                </ol>
                
                <h3>Q2/Q1（探亲）签证：</h3>
                <ol>
                    <li>身份证/驾驶执照</li>
                    <li>有效护照（至少有2页空白签证页）</li>
                    <li>中国公民出具的邀请函</li>
                    <li>邀请人中国身份证的照片/复印件</li>
                </ol>
                
                <h3>18岁以下未成年人首次申请签证：</h3>
                <ol>
                    <li>有效护照</li>
                    <li>父母/监护人的护照</li>
                    <li>如果未成年人曾更改姓名，请提供相关文件。</li>
                </ol>
                
                <h3>无法亲自到办公室的申请人：</h3>
                <ol>
                    <li>请填写以下链接的在线表格：<br>
                        <a href="https://cova.mfa.gov.cn/qzCoCommonController.do?show&pageId=index&locale=zh_CN" target="_blank">
                            https://cova.mfa.gov.cn/qzCoCommonController.do?show&pageId=index&locale=zh_CN
                        </a>
                    </li>
                    <li>选择北美洲，然后选择旧金山</li>
                    <li>完成表格后，请勿提交表格，请联系我们并提供申请编号以及申请时使用的护照号码。我们将为您审核并提交申请。</li>
                </ol>
                `,
            passportMoreInfo: `
                <h2>需要携带的文件：</h2>
                
                <h3>标准美国签发护照：</h3>
                <ol>
                    <li>身份证/驾驶执照</li>
                    <li>有效护照</li>
                </ol>
                
                <h3>中国护照：</h3>
                <ol>
                    <li>身份证/驾驶执照</li>
                    <li>绿卡</li>
                    <li>中国身份证</li>
                    <li>中国的地址和联系方式</li>
                </ol>
                
                <h3>16岁以下申请人的中国护照：</h3>
                <ol>
                    <li>出生证明</li>
                    <li>父母双方的身份证和/或中国身份证</li>
                    <li>同意书</li>
                </ol>`,
            reentryPermitMoreInfo: `
                <h2>需要携带的文件：</h2>
                
                <ol>
                    <li>护照（至少有2页空白签证页）</li>
                    <li>绿卡</li>
                    <li>身份证/驾驶执照</li>
                    <li>社会保障卡/号码</li>
                </ol>
            `,
            greenCardMoreInfo: `
                <h2>需要携带的文件：</h2>
                
                <ol>
                    <li>绿卡</li>
                    <li>身份证/驾驶执照</li>
                    <li>社会保障卡/号码</li>
                    <li>有效护照</li>
                </ol>
            `,
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
app.use(router)
app.mount('#app')
