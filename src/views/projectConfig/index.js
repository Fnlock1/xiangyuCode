import {parse} from "vue/compiler-sfc"
import {getComponentsArray} from "@/utils/index.ts";

import fs from "fs";
import {h} from "vue";

let data = await getComponentsArray()
data.forEach(item => {
    console.log(item)
})

fetch('../src/views/projectConfig/index.vue').then(res => {
    console.log(res.text().then(res=>{
        console.log(parse(res))
    }))
})