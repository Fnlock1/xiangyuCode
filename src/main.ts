import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config"
import "html5-device-mockups"

import Aura from '@primevue/themes/aura';
// main.ts
import 'virtual:uno.css'

import "../env.d.ts"
// dev Css
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue,{
        // unstyle:false
        theme: {
                preset: Aura
        }
})

app.mount('#app')
