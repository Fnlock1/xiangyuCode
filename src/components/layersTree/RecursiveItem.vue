<template>
  <n-collapse-item
      class="collapseItem"
      :name="item.id"
      :title="'div__' + item.id"
      :data-id="item.id"
      @mouseenter="mouseMove"
  >
    <template #header>
      <div :data-id="item.id" class="collapseX">{{ item.name+item.id || 'div' }}</div>
    </template>

    <!-- 递归渲染子元素 -->
    <template v-if="item.children && item.children.length">
      <recursive-item
          v-for="(child, childIndex) in item.children"
          :key="child.id"
          :item="child"
      />
    </template>
  </n-collapse-item>
</template>

<script setup lang="js">
const props = defineProps({
  item: Object,
});
</script>


<style scoped>
.collapseX{
  width: 100%;
  padding: .4em;
  transition: all .2s ease-in-out;
  border-radius: 10px;
}

.collapseX:hover{
  background: #1e7e34;
  color: white;
  padding-left: 1em;
  border-radius: 10px;
}
</style>
