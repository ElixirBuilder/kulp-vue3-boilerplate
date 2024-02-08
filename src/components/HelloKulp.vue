<template>
    <h1>Hello Kulp!</h1>
    <div>
        <input v-model="name" type="text" placeholder="What is your name?" class="name-input" />
    </div>
    <button @click="showNotification" class="btn">Submit</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const name = ref('');
function showNotification() {
    console.log('Hello ' + name.value); // show notification in Kulp project
    name.value = ''; // clear the input
}
</script>
<style scoped>
.name-input {
    padding: 5px;
}

.btn {
    padding: 10px;
    margin-top: 5px;
    border: 1px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #e0e0e0;
}

.btn:hover {
    background-color: #f0f0f0;
}
</style>