<template>

  <div
      v-for="(item, index) in componentsList"
      v-if="!render"
  >
    <component
        :key="index"
        :is="item" v-if="item?.directory === name"></component>
  </div>
  <div v-if="render && render.children !== ''">
    <component :is="render"></component>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {getComponentsArray} from "@/utils/index.ts";

const name = defineModel('name')
const render = defineModel('render')
const componentsList = ref([]);

onMounted(async () => {
  componentsList.value = await getComponentsArray();
});
</script>

<style scoped>
</style>
