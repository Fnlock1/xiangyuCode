import {fileURLToPath, URL} from 'node:url'
import UnoCSS from 'unocss/vite'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        Components({
            resolvers: [
                PrimeVueResolver(),
                NaiveUiResolver()
            ]
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server:{
        proxy:{
            '/search':{
                target: "https://www.npmjs.com/search/suggestions",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/search/, ""),
            }
        }
    }
})
