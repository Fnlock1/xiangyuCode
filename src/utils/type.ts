import {GoFileDirectory} from "vue-icons-plus/go";
import {LiaVuejs} from "vue-icons-plus/lia";
import {AiOutlineFile, AiOutlineJavaScript} from "vue-icons-plus/ai";
import {BiImageAlt} from "vue-icons-plus/bi";
import {BsFiletypeHtml, BsFiletypeJson} from "vue-icons-plus/bs";
import {TbBrandTypescript} from "vue-icons-plus/tb";
import {SiUnocss} from "vue-icons-plus/si";

type ComponentsItem = {
    name: string;  // 属性的类型应该使用小写的 'string'
    components: any;
    src:string;
};

type renderViewList = renderViewListItem[]

type renderViewListItem = {
    styleOptions:Object,
    class:Array<string>,
    id:Array<string>,
    children:renderViewChildren[] | []
}

type renderViewChildren = {
    styleOptions:object,
    id: string,
    row: number,
    col: number,
    name: string,
}

// 定义一个数组类型，它是由 ComponentsItem 对象组成的数组
type ComponentsArray = ComponentsItem[];



let direStatus = {
    dire:GoFileDirectory,
    vue:LiaVuejs,
    javascript:AiOutlineJavaScript,
    image:BiImageAlt,
    json:BsFiletypeJson,
    typeScript:TbBrandTypescript,
    file:AiOutlineFile,
    unocss:SiUnocss,
    html:BsFiletypeHtml
}


export type {
    ComponentsItem,
    ComponentsArray,
    renderViewList,
    renderViewListItem,
    renderViewChildren,
}

export {
    direStatus
}
