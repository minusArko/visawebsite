<script setup>
import { ref } from 'vue'

const name = ref('Ryan');
const status = ref('active');
const tasks = ref(['tastk1', 'task2', 'task3']);

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
};

const deleteStatus = () => {
    status.value = '';
}

</script>

<template>
  <div>
    <h1>Welcome to the Tutorial</h1>
    <p>Name: {{ name }}</p>
    <p>Status: {{ status }}</p>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <button @click="toggleStatus">Toggle Status</button>
    <button @click="deleteStatus">Delete Status</button>
  </div>
</template>