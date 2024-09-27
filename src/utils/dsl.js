import {createComponents, getComponentsNameArray} from "@/utils/index.ts";
import {materialXy, tagList} from "./elementType.ts"
import {v4 as uuidv4} from "uuid";


export function createItem(item, renderViewList) {
    item = {
        styleOptions: {},
        class: [],
        id: uuidv4(),
        scriptSetup: [],
        isComponent:false,
        children: [
            {
                styleOptions: {},
                id: uuidv4(),
                name: item.name,
                class: [],
                scriptSetup: [],
                isComponent: true,
                props: {},
                vFor: "1"
            }
        ]
    }
    createComponents(item, renderViewList.value)
}

function delId(id, renderViewList) {
    // Your implementation here
    console.log(id,renderViewList.value)
    renderViewList.value = deleteRecursively(renderViewList.value, id);
}

function update(id, v, renderViewList) {
    // Your implementation here
    renderViewList.value = updateRecursively(renderViewList.value, id, v);

}

function updateRecursively(items, id, updatedItem) {
    return items.map(item => {
        // 如果当前项的 ID 匹配，更新该项
        if (item.id === id) {
            return {...item, ...updatedItem}; // 合并更新的属性
        }

        // 如果有子元素，递归处理
        if (item.children && item.children.length) {
            item.children = updateRecursively(item.children, id, updatedItem);
        }

        return item; // 返回处理后的项
    });
}


// 嵌套
function add(id, item,renderViewList) {
    // Your implementation here
    const newItem = {
        class:[],
        isComponent: false,
        render:item.render,
        name: item.name,
        props: item.attributes,
        scriptSetup: [],
        styleOptions: {},
        vFor:"1",
        id: uuidv4(), // 生成唯一 ID
        children: [] // 初始化子元素为空数组
    };
    console.log('newvalue',item,renderViewList.value[0].children[0])
    renderViewList.value = addRecursively(renderViewList.value, id, newItem);
}

function addRecursively(items, parentId, newItem) {
    return items.map(item => {
        // 如果当前项的 ID 匹配，将新项添加为子项
        if (item.id === parentId) {
            return {
                ...item,
                children: [...item.children, newItem] // 添加新项到子项
            };
        }

        // 如果有子元素，递归处理
        if (item.children && item.children.length) {
            item.children = addRecursively(item.children, parentId, newItem);
        }

        return item; // 返回处理后的项
    });
}


// 获取id 的 当前项目
function getById(id,renderViewList) {
    return findById(renderViewList.value, id);
}




function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item; // 找到匹配项，返回该项
        }
        // 递归检查子项
        if (item.children && item.children.length) {
            const found = findById(item.children, id);
            if (found) {
                return found; // 找到匹配项，返回
            }
        }
    }
    return null; // 如果未找到，返回 null
}

function deleteRecursively(items, id) {
    return items.reduce((acc, item) => {
        // 如果当前项的 ID 匹配，跳过该项（不添加到累积器中）
        if (item.id === id) {
            return acc;
        }

        // 如果有子元素，递归处理
        if (item.children && item.children.length) {
            item.children = deleteRecursively(item.children, id);
        }

        // 将处理后的项添加到累积器
        acc.push(item);
        return acc;
    }, []);
}

function getSelectedItem(renderViewList) {
    return findSelectedItem(renderViewList.value);
}

function findSelectedItem(items) {
    for (const item of items) {
        // 检查是否包含 'clickContainer'，作为选中状态的标志
        if (item.class.includes('clickContainer')) {
            return item; // 找到选中项，返回该项
        }
        // 递归检查子项
        if (item.children && item.children.length) {
            const found = findSelectedItem(item.children);
            if (found) {
                return found; // 找到选中项，返回
            }
        }
    }
    return null; // 如果未找到选中项，返回 null
}

export {
    delId,
    update,
    add,
    getById,
    getSelectedItem
}
