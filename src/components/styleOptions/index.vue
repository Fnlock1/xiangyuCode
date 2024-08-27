<template>
  <Textarea
      auto-resize="true"
      v-model="curDataString"
      rows="5"
      cols="30"
      v-if="curDataString"
  />
</template>

<script setup>
import { ref, watch } from "vue";

let curData = ref({});
let curDataString = ref('');

let renderViewList = defineModel('renderViewList');

watch(renderViewList.value, (newValue) => {
  const matchedItems = newValue.filter(x => x.class.includes('clickContainer'));
  if (matchedItems.length > 0 ) {
    curData.value = matchedItems[0];
    curDataString.value = JSON.stringify(curData.value.styleOptions, null, 2); // 将对象转换为格式化的字符串
  } else {
    curData.value = {};
    curDataString.value = ''; // 如果没有匹配项，重置 curDataString
  }
});

// 监听 curDataString 的变化，更新 curData
watch(curDataString, (newValue) => {
  try {
    curData.value.styleOptions = JSON.parse(newValue); // 将字符串转换为对象
  } catch (e) {
    curData.value.styleOptions = JSON.parse(newValue); // 将字符串转换为对象
  }
});
</script>
