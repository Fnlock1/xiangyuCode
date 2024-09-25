import {type ComponentsArray, direStatus, type renderViewList, type renderViewListItem} from "@/utils/type";
import type {IconType} from "vue-icons-plus/lib";

// 定义一个异步函数，用于获取所有组件数组
function getComponentsNameArray(): Promise<ComponentsArray> {
    // 使用 import.meta.glob 动态导入匹配模式的所有文件
    const components = import.meta.glob('/src/codeComponent/**/*.js');
    // 创建一个空数组来存储每个文件加载完成后的 Promise
    const dataPromises: any[] = [];

    // 遍历 components 对象中的所有路径
    Object.keys(components).forEach(path => {
        // 对每个路径，使用 Promise 来加载模块，并将模块的数据格式化后推入到 dataPromises 数组中
        // @ts-ignore
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

    const dataPromises: any[] = [];

    // 遍历 components 对象中的所有路径
    Object.keys(components).forEach(path => {
        // 对每个路径，使用 Promise 来加载模块，并将模块的数据格式化后推入到 dataPromises 数组中
        dataPromises.push(
            components[path]().then(module => {
                // 提取上级目录的名称
                const directoryName = path.split('/').slice(-2, -1)[0];
                // @ts-ignore
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


/**
 * @description 获取图标
 * @return icon:components
 * @example
 *  getDireIcon('dire') //direIcon:Components
 * @param type
 */

 export  function getDireIcon(type:string):any{
    // @ts-ignore
    return direStatus[type]
}


//清空所有class里面的clickContainer
export function clearAllClass(renderViewList:any) {
   return  renderViewList.value = renderViewList.value.map(el => {
        el.class = el.class.filter(cls => cls !== 'clickContainer');
        el.children.map(x=>{
            if (x.class.includes('clickContainer')) {
                x.class = x.class.filter(cls => cls !== 'clickContainer');
            }
        })
        return el
    })
}


export const vueEvents = [
    { value: 'click', label: '鼠标点击 (click)' },
    { value: 'dblclick', label: '鼠标双击 (dblclick)' },
    { value: 'mouseenter', label: '鼠标进入元素区域 (mouseenter)' },
    { value: 'mouseleave', label: '鼠标离开元素区域 (mouseleave)' },
    { value: 'mousemove', label: '鼠标在元素上移动 (mousemove)' },
    { value: 'mousedown', label: '鼠标按下 (mousedown)' },
    { value: 'mouseup', label: '鼠标释放 (mouseup)' },
    { value: 'contextmenu', label: '右键菜单事件 (contextmenu)' },
    { value: 'keydown', label: '键盘按下 (keydown)' },
    { value: 'keyup', label: '键盘释放 (keyup)' },
    { value: 'keypress', label: '字符键被按下（已弃用） (keypress)' },
    { value: 'input', label: '输入框内容变化 (input)' },
    { value: 'change', label: '输入框内容改变后失去焦点时触发 (change)' },
    { value: 'focus', label: '输入框获得焦点 (focus)' },
    { value: 'blur', label: '输入框失去焦点 (blur)' },
    { value: 'submit', label: '表单提交 (submit)' },
    { value: 'touchstart', label: '触摸开始（移动端） (touchstart)' },
    { value: 'touchmove', label: '触摸移动（移动端） (touchmove)' },
    { value: 'touchend', label: '触摸结束（移动端） (touchend)' },
    { value: 'touchcancel', label: '触摸被取消（移动端） (touchcancel)' },
    { value: 'load', label: '资源加载完成 (load)' },
    { value: 'error', label: '加载资源出错 (error)' },
    { value: 'scroll', label: '页面滚动 (scroll)' },
    { value: 'resize', label: '窗口大小变化 (resize)' }
];








// 导出 getComponentsArray 函数
export {getComponentsNameArray, createComponents, getComponentsArray, clickContainer};
