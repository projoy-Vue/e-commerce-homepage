 import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import store from './store/store'; // Import the Vuex store

const app = createApp(App);
app.use(router); // Use the router
app.use(store); // Use the store
app.mount('#app');
