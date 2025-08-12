<script setup>

import { ref } from 'vue';

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
    buttonText: {
        type: String,
        default: 'Learn More'
    },
    price: {
        type: String,
        default: 'Price not available'
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
            <p class="m-0">
                {{ props.description }}
            </p>
        </template>
    </Card>
</template>