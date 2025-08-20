<script setup>
import { useRouter } from 'vue-router';   
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const router = useRouter();

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

const handleNav = () => {
    router.push(props.buttonRoute);
}
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
            <Button @click="handleNav" class="w-full ">
                {{ t('learnMore') }}
            </Button>
        </template>
    </Card>
</template>