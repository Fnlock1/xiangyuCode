


 class keyDown {
    constructor() {
        this.shortcuts = {}; // 存储快捷键组合和回调函数
        this.pressedKeys = new Set(); // 用来存储当前按下的按键

        // 监听键盘事件
        document.addEventListener('keydown', (event) => this.handleKeyDown(event));
        document.addEventListener('keyup', (event) => this.handleKeyUp(event));
    }

    // 注册快捷键组合
    register(keys, fn) {
        const keyCombination = keys.map(key => key).sort().join('+');
        this.shortcuts[keyCombination] = fn; // 将组合键作为键名，存储回调函数
    }

    // 处理按键按下事件
    handleKeyDown(event) {
        this.pressedKeys.add(event.code); // 添加当前按下的键
        const pressedCombination = [...this.pressedKeys].sort().join('+'); // 组合按下的键
        if (this.shortcuts[pressedCombination]) {
            this.shortcuts[pressedCombination](event); // 触发组合键的回调函数
            event.preventDefault(); // 阻止默认行为
        }
    }

    // 处理按键释放事件
    handleKeyUp(event) {
        this.pressedKeys.delete(event.code); // 移除释放的按键
    }
}


let keyContainer = new keyDown()

export {
    keyContainer
}