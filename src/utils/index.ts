import type {ComponentsArray, renderViewList, renderViewListItem} from "@/utils/type";

// 定义一个异步函数，用于获取所有组件数组
function getComponentsNameArray(): Promise<ComponentsArray> {
    // 使用 import.meta.glob 动态导入匹配模式的所有文件
    const components = import.meta.glob('/src/codeComponent/**/*.js');
    // 创建一个空数组来存储每个文件加载完成后的 Promise
    const dataPromises = [];

    // 遍历 components 对象中的所有路径
    Object.keys(components).forEach(path => {
        // 对每个路径，使用 Promise 来加载模块，并将模块的数据格式化后推入到 dataPromises 数组中
        dataPromises.push(
            components[path]().then(module => ({
                src: path,
                ...module.default,
            }))
        );
    });

    // 使用 Promise.all 等待所有的 Promise 完成（即所有的模块加载完成）
    // 并将所有加载完成的数据合并为一个数组返回
    return Promise.all(dataPromises).then(data => data);
}


function getComponentsArray(): Promise<ComponentsArray> {
    const components = import.meta.glob('/src/codeComponent/**/*.vue');

    const dataPromises = [];

    // 遍历 components 对象中的所有路径
    Object.keys(components).forEach(path => {
        // 对每个路径，使用 Promise 来加载模块，并将模块的数据格式化后推入到 dataPromises 数组中
        dataPromises.push(
            components[path]().then(module => {
                // 提取上级目录的名称
                const directoryName = path.split('/').slice(-2, -1)[0];
                return {
                    src: path,
                    directory: directoryName,
                    ...module.default,
                };
            })
        );
    });

    // 使用 Promise.all 等待所有的 Promise 完成（即所有的模块加载完成）
    // 并将所有加载完成的数据合并为一个数组返回
    return Promise.all(dataPromises).then(data => data);
}





// 点击 容器触发
/**
 * readme:这个函数的意思是
 */
function clickContainer( e: renderViewListItem, i: number, className: string) {
    e.class.push(className)
    return e;
}


// 创建新的组件
function createComponents(newRenderItems: renderViewListItem, renderViewList: renderViewList): renderViewList {
    renderViewList.push(newRenderItems);
    return renderViewList;
}

// 导出 getComponentsArray 函数
export {getComponentsNameArray, createComponents, getComponentsArray, clickContainer};
