<script setup>
import { ref } from 'vue';
import Services from './Services.vue';
import MenuBar from 'primevue/menubar';
import Contact from './Contact.vue';
const selectedLanguage = ref('English');
import { useI18n } from 'vue-i18n';
const { t, locale, availableLocales } = useI18n({useScope: 'global'});

const navbarItems = ref([
    {
        label: t('navTitle'),
    },
    {
        label: t('navHome'),
    },
    {
        label: t('navServices')

    },
    {
        label: t('navContact'),
    },
    // {
    //     label: selectedLanguage.value,
    //     items: [
    //         {
    //             label: 'English',
    //             command: () => changeLanguage('English')
    //         },
    //         {
    //             label: '中文',
    //             command: () => changeLanguage('中文')
    //         },
        
    //     ]
    // },
])

// const checked = ref(false);
</script>

<template>
    <div class="fixed min-w-full z-50">
        <MenuBar :model="navbarItems"
            :pt="{
                root: {
                    style: 'border-radius: 0px; border: none;'
                },
                submenu: {
                    style: 'border: none;'
                }
            
            }" >
            <template #end>
                <<select v-model="locale">
                    <option class= "text-black p-2 rounded"v-for="lang in availableLocales" :key="lang" :value="lang">{{ lang }}</option>
                </select>>
            </template>
            <template>
                
            </template>
        </MenuBar>  
    </div>
    
    
    <img src="@/assets/placeholder.jpg" alt="placeholder" /></img>

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
