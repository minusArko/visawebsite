<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t, locale, availableLocales } = useI18n({useScope: 'global'});

const router = useRouter();

const navbarItems = ref([
    {
        label: t('navTitle'),
    },
    {
        label: t('navHome'),
        command: () => {
            router.push({ name: 'Home'});
        }
    },
    {
        label: t('navServices'),
        command: () => {
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
        }
        
    },
    {
        label: t('navContact'),
    }
])
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
</template>