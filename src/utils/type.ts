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

export type {
    ComponentsItem,
    ComponentsArray,
    renderViewList,
    renderViewListItem,
    renderViewChildren,
}
