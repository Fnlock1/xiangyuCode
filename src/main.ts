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
import axios from "axios";
import setupLocatorUI from "@locator/runtime";
// @ts-ignore
import {keyContainer} from "@/utils/keyDown.js"
// dev Css
const app = createApp(App)

axios.defaults.baseURL = "http://localhost:8000/"

if (process.env.NODE_ENV === "development") {
        setupLocatorUI({
                adapter: "vue"
        });
}



app.use(createPinia())
app.use(keyContainer)
app.use(router)
app.use(PrimeVue,{
        unstyle:true,
        theme: {
                preset: Aura
        }
})
// @ts-ignore
// @ts-ignore
app.mount('#app')
