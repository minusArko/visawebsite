<script setup>
    import NavbarAlt from './NavbarAlt.vue';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();

</script>

<template>
    <NavbarAlt></NavbarAlt>
    <div class = "text-center p-4">
        <div class="card p-6 max-w-4xl mx-auto">
            <div class="visa-content text-left" v-html="t('greenCardMoreInfo')"></div>
        </div>
    </div>
        
</template>