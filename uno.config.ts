// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    shortcuts:{
        'join':'p-2 w-4vw h-4vw  flex justify-center items-center fixed right-12 bottom-12 rounded-full bg-[#18a058] w-fit text-white flex-col hover:scale-125 transition-all duration-200 ease-in-out cursor-pointer',
        'bgPrimary':'bg-[#18a058]',
        'Primary':'color-[#18a058]',
        'back':" bgPrimary  duration-700 w-fit  text-white flex justify-center items-center  p-2 rounded-full left-10 top-10",
        'vueCreate':"bgPrimary flex justify-center items-center  p-2 rounded-full  w-fit text-white pos-fixed right-12  bottom-12 w12 h12",
        'headIcon':"w-5 transition-all hover:text-[#18a058] cursor-pointer"

    },
    theme:{
        extend: {
            keyframes: {
                zoomIn: {
                    '0%': { transform: 'scale(0.5)', opacity: 0 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '100%': { transform: 'scale(0.5)', opacity: 0 },
                },
            },
            animation: {
                zoomIn: 'zoomIn 0.5s ease-in-out',
                zoomOut: 'zoomOut 0.5s ease-in-out',
            },
        }
    }
})
