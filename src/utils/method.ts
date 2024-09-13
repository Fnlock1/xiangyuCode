import {parse} from "vue-codemirror"

// 获取文件
export function getH(v){
    return parse(v)
}