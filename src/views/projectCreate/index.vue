<template>


    <Splitter  class="tabBar">
        <SplitterPanel size="25">
            <ComponentList v-model:renderViewList="renderViewList"></ComponentList>
        </SplitterPanel>
        <SplitterPanel size="50" >
                <Content v-model:renderViewList="renderViewList"></Content>
        </SplitterPanel>
        <SplitterPanel size="25">
            <StyleOptions></StyleOptions>
        </SplitterPanel>
    </Splitter>


</template>

<script setup>
import ComponentList from "@/components/componentList/index.vue";
import Content from "@/components/content/index.vue";
import StyleOptions from "@/components/styleOptions/index.vue";
import {ref} from "vue";
let renderViewList = ref([

])
</script>

<style scoped>
.tabBar{
    height: 100vh;
}

.tabBar > div{
    border-right: 1px solid #cccccc;
}

.tabBar>div:last-child{
    border:none
}
</style>
