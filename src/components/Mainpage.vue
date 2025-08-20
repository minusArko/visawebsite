<script setup>
import { ref } from 'vue';
import Services from './Services.vue';
import Navbar from './Navbar.vue';
import Contact from './Contact.vue';
const selectedLanguage = ref('English');
import { useI18n } from 'vue-i18n';

</script>

<template>
    
    
    <Navbar></Navbar>
    <div id='top'>
        <img src="@/assets/placeholder.jpg" alt="placeholder" /></img>
    </div>
    <Services></Services>
    <Contact></Contact>
    
</template>

<style scoped>

img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
}



</style>
