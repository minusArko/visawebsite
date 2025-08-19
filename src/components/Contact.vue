<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<template>
    <div id="contact"class="text-white">
        <h1 class="text-4xl bg-gray-900 text-white font-bold text-center mb-8 p-4">{{t('contactTitle')}}</h1>
    </div>   
    <div class="text-center p-4">
        <div class="card p-4 content-center border-black">
            <Divider type="solid">
                <b>{{ t('location') }}</b>
            </Divider>
            <p>5115 Spring Mountain #201K</p>
            <div class="flex justify-center items-center mb-4">
                <iframe 
                    class="rounded-xs"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.3144786651305!2d-115.2162542116753!3d36.12547813441179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6b7e81ddab3%3A0x91ae56d2bd42031f!2sPacific%20Asian%20Plaza%2C%205115%20Spring%20Mountain%20Rd%2C%20Las%20Vegas%2C%20NV%2089146!5e1!3m2!1sen!2sus!4v1754988452368!5m2!1sen!2sus" 
                    width="400" 
                    height="400" 
                    style="border-color: black; border-radius: 5px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Divider type="solid">
                <b>{{ t('email') }}</b>
            </Divider>
            <p>liwanjia699@gmail.com</p>
            <Divider type="solid">
                <b>WeChat</b>
            </Divider>
            <p>liwanjia699</p>
            <Divider type="solid">
                <b>{{ t('phone') }}</b>
            </Divider>
            <p>+1 (702) 768-8829</p>
        </div>
    </div>
    
</template>