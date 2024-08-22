export default {
    // 关键字
    keywords: ['align-content', 'align-items', 'align-self', 'all', 'animation', 'background', 'border', 'box-shadow', 'color', 'display', 'flex', 'font-size', 'grid', 'height', 'justify-content', 'margin', 'padding', 'position', 'transform', 'width', 'z-index'],

    // 属性值
    propertyValues: ['none', 'block', 'inline', 'flex', 'grid', 'absolute', 'relative', 'fixed', 'static', 'inherit', 'initial'],

    // 颜色值
    colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', 'rgb', 'rgba', 'hsl', 'hsla'],

    // 运算符
    operators: [':', ';', '{', '}', '>', '+', '~', ','],

    // 符号
    symbols: /[:;{}>+~,\s]+/,

    // 转义字符
    escapes: /\\(?:[0-9a-fA-F]{1,6}\s?|.)/,

    // 主要的标记器定义
    tokenizer: {
        root: [
            // 注释
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],

            // 选择器
            [/[.#]?[-_a-zA-Z]+[\w-]*/, 'attribute.name'],

            // 关键字
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@propertyValues': 'keyword.value',
                        '@colors': 'color',
                        '@default': 'identifier'
                    }
                }
            ],

            // 运算符
            [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],

            // 数字
            [/\d+(\.\d+)?(px|em|rem|%)?/, 'number'],

            // 字符串
            [/"([^"\\]|\\.)*$/, 'string.invalid'],  // 未终止的字符串
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

            // 空白字符
            { include: '@whitespace' }
        ],

        comment: [
            [/[^/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],    // 注释嵌套
            ["\\*/", 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],

        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],

        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
    }
};
