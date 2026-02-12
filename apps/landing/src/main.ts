import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@yoga/ui-kit/dist/index.css'
import './assets/main.css'
import router from "@/router.ts";

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')