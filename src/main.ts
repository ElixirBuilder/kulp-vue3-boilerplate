import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router';

const app = createApp(App);
app.use(Router);

// DO NOT TOUCH EXISTING SETTINGS
// YOU CAN ADD YOUR OWN SETTINGS BELOW


app.mount('#app')
