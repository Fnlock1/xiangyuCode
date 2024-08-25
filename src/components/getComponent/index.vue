<template>

  <div v-for="(item, index) in componentsList">
    <component :is="item" v-if="item?.directory === name"></component>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getComponentsArray} from "@/utils/index.ts";

const name = defineModel('name')
const componentsList = ref([]);

onMounted(async () => {
  componentsList.value = await getComponentsArray();
});
</script>

<style scoped>
</style>