import { createApp } from 'vue'
import { createPinia }  from 'pinia';
import "./scss/main.scss";
import App from './App.vue'
const app = createApp(App);
app.use(createPinia())
app.mount('#app')

