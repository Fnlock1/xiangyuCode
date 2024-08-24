// 获取 自定义目录下面的文件夹

import type {ComponentsArray} from "@/utils/type";

function getComponentsArray():ComponentsArray{
    const components = import.meta.glob('/src/codeComponent/**/*.{js,vue}');

}
