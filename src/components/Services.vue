<script setup>
import { ref } from 'vue';
import Cards from './Cards.vue';
import cnVisaImg from '@/assets/cn_visa.jpg';
import apostilleImg from '@/assets/apostille.jpg';
import passportImg from '@/assets/passport.jpg';
import notaryImg from '@/assets/notary.jpg';
import planeImg from '@/assets/plane.jpg';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>


<template>
    <div class="text-white">
        <h1 class="text-4xl bg-gray-900 text-white font-bold text-center mb-8 p-4">{{t('servicesTitle')}}</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Cards 
            :title="t('visaTitle')"
            :description="t('visaDescription')"
            :imageUrl="cnVisaImg"
            buttonText="Learn More" 
            :price="t('visaPrice')"
            :buttonRoute="'/cnVisa'"
        />
        <Cards 
            :title="t('apostilleTitle')"
            :description="t('apostilleDescription')"
            :imageUrl="apostilleImg"
            buttonText="Learn More" 
            :price="t('apostillePrice')"
        />
        <Cards 
            :title="t('passportTitle')"
            :description="t('passportDescription')"
            :imageUrl="passportImg"
            buttonText="Learn More" 
            :price="t('passportPrice')"
        />
        <Cards 
            :title="t('notaryTitle')" 
            :description="t('notaryDescription')"
            :imageUrl="notaryImg"
            buttonText="Learn More" 
            :price="t('notaryPrice')"
        />
        <Cards 
            :title="t('planeTitle')"
            :description="t('planeDescription')"
            :imageUrl="planeImg"
            buttonText="Learn More" 
            :price="t('planePrice')"
        />
    </div>
</template>

<style scoped>

</style>