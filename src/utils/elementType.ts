import {h} from "vue";

export let tagList = {
    a: {
        attributes: {
            href: { type: "text", default: "#", desc: "超链接的目标 URL" },
            target: { type: "select", options: ["_blank", "_self", "_parent", "_top"], default: "_self", desc: "链接打开的方式" },
            rel: { type: "text", default: "noopener", desc: "定义链接与目标的关系" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        },
        content: { type: "text", default: "内容", desc: "元素内的文本内容" }

    },
    div: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        },
        content: { type: "text", default: "内容", desc: "元素内的文本内容" }

    },
    p: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        },
        content: { type: "text", default: "内容", desc: "元素内的文本内容" }

    },
    button: {
        attributes: {
            type: { type: "select", options: ["button", "submit", "reset"], default: "button", desc: "按钮的类型" },
            disabled: { type: "boolean", default: false, desc: "按钮是否禁用" },
            text: { type: "text", default: "Click Me", desc: "按钮的显示文本" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        },
        content: { type: "text", default: "内容", desc: "元素内的文本内容" }
    },
    img: {
        attributes: {
            src: { type: "text", default: "", desc: "图片的源路径" },
            alt: { type: "text", default: "", desc: "图片的替代文本" },
            width: { type: "number", default: 100, desc: "图片的宽度（单位像素）" },
            height: { type: "number", default: 100, desc: "图片的高度（单位像素）" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        },
        content: { type: "text", default: "内容", desc: "元素内的文本内容" }
    },
    input: {
        attributes: {
            type: { type: "select", options: ["text", "password", "email", "number", "checkbox", "radio"], default: "text", desc: "输入框的类型" },
            placeholder: { type: "text", default: "Enter value", desc: "输入框的占位符" },
            value: { type: "text", default: "", desc: "输入框的默认值" },
            disabled: { type: "boolean", default: false, desc: "输入框是否禁用" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    section: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    li: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    abbr: {
        attributes: {
            title: { type: "text", default: "", desc: "显示的缩写全称" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    address: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    area: {
        attributes: {
            shape: { type: "text", default: "rect", desc: "区域形状" },
            coords: { type: "text", default: "", desc: "区域坐标" },
            href: { type: "text", default: "#", desc: "区域链接目标" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    article: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    aside: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    b: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    base: {
        attributes: {
            href: { type: "text", default: "", desc: "基本 URL" },
            target: { type: "text", default: "_self", desc: "链接的默认目标" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    bdi: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    bdo: {
        attributes: {
            dir: { type: "select", options: ["ltr", "rtl"], default: "ltr", desc: "文本方向" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    blockquote: {
        attributes: {
            cite: { type: "text", default: "", desc: "引用来源" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    body: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    br: {
        attributes: {}
    },
    caption: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    cite: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    code: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    col: {
        attributes: {
            span: { type: "number", default: 1, desc: "跨越的列数" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    colgroup: {
        attributes: {
            span: { type: "number", default: 1, desc: "跨越的列数" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    data: {
        attributes: {
            value: { type: "text", default: "", desc: "关联的数据值" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    datalist: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    dd: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    del: {
        attributes: {
            cite: { type: "text", default: "", desc: "删除内容的出处 URL" },
            datetime: { type: "text", default: "", desc: "删除的时间" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    details: {
        attributes: {
            open: { type: "boolean", default: false, desc: "是否默认展开" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    dfn: {
        attributes: {
            title: { type: "text", default: "", desc: "定义的术语" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    dialog: {
        attributes: {
            open: { type: "boolean", default: false, desc: "对话框是否默认打开" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    dl: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    dt: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    em: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    embed: {
        attributes: {
            src: { type: "text", default: "", desc: "嵌入的媒体资源 URL" },
            type: { type: "text", default: "", desc: "嵌入的媒体类型" },
            width: { type: "number", default: 300, desc: "媒体宽度" },
            height: { type: "number", default: 150, desc: "媒体高度" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    fieldset: {
        attributes: {
            disabled: { type: "boolean", default: false, desc: "是否禁用字段集" },
            name: { type: "text", default: "", desc: "字段集名称" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    figcaption: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    figure: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    footer: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    form: {
        attributes: {
            action: { type: "text", default: "", desc: "表单提交的目标 URL" },
            method: { type: "select", options: ["GET", "POST"], default: "GET", desc: "表单提交的方法" },
            enctype: { type: "select", options: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], default: "application/x-www-form-urlencoded", desc: "表单的编码类型" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h1: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h2: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h3: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h4: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h5: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    h6: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    head: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    header: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    hr: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    html: {
        attributes: {
            lang: { type: "text", default: "en", desc: "HTML 文档的语言" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    iframe: {
        attributes: {
            src: { type: "text", default: "", desc: "嵌入的内容 URL" },
            width: { type: "number", default: 300, desc: "iframe 宽度" },
            height: { type: "number", default: 150, desc: "iframe 高度" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },

    main: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    mark: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    menu: {
        attributes: {
            type: { type: "select", options: ["context", "toolbar"], default: "context", desc: "菜单的类型" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    meta: {
        attributes: {
            name: { type: "text", default: "", desc: "元数据的名称" },
            content: { type: "text", default: "", desc: "元数据的内容" },
            charset: { type: "text", default: "", desc: "字符编码" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    nav: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    noscript: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    object: {
        attributes: {
            data: { type: "text", default: "", desc: "嵌入的对象 URL" },
            type: { type: "text", default: "", desc: "嵌入对象的类型" },
            width: { type: "number", default: 300, desc: "对象的宽度" },
            height: { type: "number", default: 150, desc: "对象的高度" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    ol: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    option: {
        attributes: {
            value: { type: "text", default: "", desc: "选项的值" },
            disabled: { type: "boolean", default: false, desc: "选项是否禁用" },
            selected: { type: "boolean", default: false, desc: "选项是否被选中" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    output: {
        attributes: {
            for: { type: "text", default: "", desc: "关联的表单元素 ID" },
            name: { type: "text", default: "", desc: "输出的名称" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    param: {
        attributes: {
            name: { type: "text", default: "", desc: "参数名称" },
            value: { type: "text", default: "", desc: "参数值" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    picture: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    pre: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    progress: {
        attributes: {
            value: { type: "number", default: 0, desc: "当前进度" },
            max: { type: "number", default: 100, desc: "最大值" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    script: {
        attributes: {
            src: { type: "text", default: "", desc: "外部脚本的 URL" },
            async: { type: "boolean", default: false, desc: "是否异步加载" },
            defer: { type: "boolean", default: false, desc: "是否延迟执行" },
            type: { type: "text", default: "text/javascript", desc: "脚本的 MIME 类型" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    select: {
        attributes: {
            name: { type: "text", default: "", desc: "选择框的名称" },
            multiple: { type: "boolean", default: false, desc: "是否允许多选" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    small: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    source: {
        attributes: {
            src: { type: "text", default: "", desc: "媒体的源路径" },
            type: { type: "text", default: "", desc: "媒体的 MIME 类型" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    span: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    table: {
        attributes: {
            border: { type: "number", default: 0, desc: "边框宽度" },
            cellpadding: { type: "number", default: 0, desc: "单元格内边距" },
            cellspacing: { type: "number", default: 0, desc: "单元格之间的间距" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    tbody: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    td: {
        attributes: {
            colspan: { type: "number", default: 1, desc: "跨越的列数" },
            rowspan: { type: "number", default: 1, desc: "跨越的行数" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    tfoot: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    th: {
        attributes: {
            colspan: { type: "number", default: 1, desc: "跨越的列数" },
            rowspan: { type: "number", default: 1, desc: "跨越的行数" },
            scope: { type: "select", options: ["row", "col", "rowgroup", "colgroup"], default: "row", desc: "单元格的作用域" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    thead: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    time: {
        attributes: {
            datetime: { type: "text", default: "", desc: "时间的机器可读格式" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    title: {
        attributes: {
            text: { type: "text", default: "", desc: "文档的标题" }
        }
    },
    tr: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    track: {
        attributes: {
            src: { type: "text", default: "", desc: "轨道的 URL" },
            kind: { type: "select", options: ["subtitles", "captions", "descriptions", "chapters", "metadata"], default: "subtitles", desc: "轨道的类型" },
            srclang: { type: "text", default: "", desc: "语言代码" },
            label: { type: "text", default: "", desc: "轨道的标签" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    ul: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    var: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    video: {
        attributes: {
            src: { type: "text", default: "", desc: "视频的源路径" },
            width: { type: "number", default: 300, desc: "视频的宽度" },
            height: { type: "number", default: 150, desc: "视频的高度" },
            controls: { type: "boolean", default: false, desc: "是否显示控制条" },
            autoplay: { type: "boolean", default: false, desc: "是否自动播放" },
            loop: { type: "boolean", default: false, desc: "是否循环播放" },
            muted: { type: "boolean", default: false, desc: "是否静音" },
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    },
    wbr: {
        attributes: {
            class: { type: "text", default: "", desc: "CSS 类名" },
            id: { type: "text", default: "", desc: "元素的 ID" }
        }
    }
};

// 使用插件机制 用于开发 后续的自定义代码片段
class material{
    plugins = []

    use(plugin:object){
        // @ts-ignore
        this.plugins.push(plugin)
        this.render()
    }



    render(){
        this.plugins =  this.plugins.map(x=>{
            // 对象循环
            // @ts-ignore
            for(let key in x){
                x[key].name = key
                // @ts-ignore
                let t:object = {}
                for (let y in  x[key].attributes){
                    t[y] = x[key].attributes[y].default
                }
                x[key].attributes.content =  { type: "text", default: "内容", desc: "元素内的文本内容" }
                x[key].render =  h(key, t,x[key].attributes.content.default)
            }
            return x
        })
    }

}

export let materialXy = new material()


