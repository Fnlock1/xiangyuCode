type ComponentsItem = {
    name: string;  // 属性的类型应该使用小写的 'string'
    components: any;
};

// 定义一个数组类型，它是由 ComponentsItem 对象组成的数组
type ComponentsArray = ComponentsItem[];

export type {
    ComponentsItem,
    ComponentsArray
}
