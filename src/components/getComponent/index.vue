<template>

  <div v-for="(item, index) in componentsList"
  >
    <component
        :key="index"
        :is="item" v-if="item?.directory === name"></component>
  </div>

</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {getComponentsArray} from "@/utils/index.ts";

const name = defineModel('name')
let scriptSetup = defineModel('scriptSetup')
let vFor = defineModel('vFor')
const componentsList = ref([]);
let forArray = ref([])
watch(vFor,()=>{
  forArray.value = new Array(vFor.value).fill(1)

})
onMounted(async () => {
  componentsList.value = await getComponentsArray();
});
</script>

<style scoped>
</style>
