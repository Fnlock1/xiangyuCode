<template>
    <div>
        <!-- 左侧列表 -->

        <div v-for="(element, index) in list" :key="index">
            <vue-draggable
                    v-model="list[index].children"
                    group="shared"
                    @add="add"
                    ghost-class="ghost"
                    :style="element.styleOptions"
            >
                <div v-for="(item, col) in element.children" :key="item.id">
                    <div :style="item.styleOptions">
                        <GetComponent v-model:name="item.name"></GetComponent>
                    </div>
                </div>
            </vue-draggable>
        </div>
    </div>
</template>

<script setup lang="ts">
import {VueDraggable} from 'vue-draggable-plus';
import {ref} from 'vue';
import {v4 as uuidv4} from 'uuid';
import GetComponent from "@/components/getComponent/index.vue";

// 定义列表数据
let list = ref([
    {
        styleOptions: {
            display:"flex",
            gap:'1em'
        },
        children: [
            {

                styleOptions: {
                    background: "red",
                },
                id: uuidv4(),
                row: 0,
                col: 0,
                name: 'Button',
            },
            {
                styleOptions: {
                    background: "green",
                },
                id: uuidv4(),
                row: 0,
                col: 1,
                name: "Card",
            }
        ]
    },

    {
        styleOptions: {
            background: "red",
        },
        children: [
            {

                styleOptions: {
                    background: "red",
                },
                id: uuidv4(),
                row: 0,
                col: 0,
                name: 'Button',
            },
            {
                styleOptions: {
                    background: "green",
                },
                id: uuidv4(),
                row: 0,
                col: 1,
                name: "Card",
            }
        ]
    },

]);

const onEnd = (e: any) => {
    // 在拖拽结束时处理逻辑
};

const onMove = (evt: any) => {
    // 处理跨容器拖拽，确保数据不会丢失
    return true; // 允许移动
};

function add(e) {
    // 处理排序事件

}
</script>

<style scoped>
/* 定义拖拽过程中的样式 */
.ghost {
    opacity: 0.5;
}
</style>
