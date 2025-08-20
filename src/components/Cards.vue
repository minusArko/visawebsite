<script setup>

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
    title: {
        type: String,
        default: 'Default Title'
    },
    description: {
        type: String,
        default: 'Default Description'
    },
    imageUrl: {
        type: String,
        default: 'image'
    },
    price: {
        type: String,
        default: 'Price not available'
    },
    buttonRoute: {
        type: String,
        default: '#'
    }
});

</script>

<template>
    <Card class="min-h-75">
        <template #header>
            <img :src="props.imageUrl" alt="Service Image" class="w-full h-48 object-cover rounded-t-lg">
        </template>
        <template #title> {{ props.title }}</template>
        <template #subtitle> {{ props.price }}</template>
        <template #content> 
            <p class="m-0 min-h-30">
                {{ props.description }}
            </p>
        </template>
        <template #footer>
            <Button class="w-full ">
                <RouterLink :to="props.buttonRoute" style="text-decoration: none; color: black;">{{ t('learnMore') }}</RouterLink>
            </Button>
        </template>
    </Card>
</template>