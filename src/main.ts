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
// @ts-ignore
import {materialXy, tagList} from "./utils/elementType.js"
import "../env.d.ts"
import axios from "axios";
// dev Css
const app = createApp(App)

axios.defaults.baseURL = "http://localhost:8000/"

app.use(createPinia())
app.use(router)
app.use(PrimeVue,{
        unstyle:true,
        theme: {
                preset: Aura
        }
})
materialXy.use(tagList)
app.use(materialXy)
app.mount('#app')
