<template>
  <div class="w80% mx grid gap-3">
    <h3>Unocss class</h3>
    <n-auto-complete
        v-model:value="value"
        :options="options"
        placeholder="请输入css"
        @keydown.enter="classPush"
        clearable
        class="rounded-xl"
    />
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {presetUno} from "unocss";
// 定义输入值的引用
const value = ref("");
let curData = defineModel('curData')
let classList = ref([]);
// 使用 UnoCSS 的响应式前缀
const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
// 计算 options 列表
const options = computed((v) => {
  classList.value = presetUno().rules.map(rule => {
    if (typeof rule[0] === 'string') {
      return rule[0]
    } else {
      if (rule[0].test(value.value)) {
        return rule[0].exec(value.value)[0]
      }
    }
  }).filter(x=>x).map(x=>{
    return {
      label:x,
      value:x
    }
  })
  return classList.value.flatMap(x => x.label).filter(x => {
    return x.includes(value.value)
  })
});

function classPush() {
  curData.value.class.push(value.value)
  curData.value.class = curData.value.class.filter((item, index) => curData.value.class.indexOf(item) === index);
  value.value = ''
}
</script>
