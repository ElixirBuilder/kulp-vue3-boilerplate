import { createRouter, createWebHistory } from 'vue-router';
import HelloKulp from '../components/HelloKulp.vue'
// IMPORT YOUR COMPONENTS HERE

const routes = [
    {
        path: '/',
        component: HelloKulp
    },
    // REGISTER YOUR COMPONENT HERE
]

const router = createRouter({ history: createWebHistory(), routes }) // DO NOT TOUCH THESE SETTINGS
export default router
