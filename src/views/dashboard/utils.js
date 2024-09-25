import {RiHome2Fill} from "vue-icons-plus/ri";
import {BsBoxSeamFill} from "vue-icons-plus/bs";
import {AiFillSetting} from "vue-icons-plus/ai";
import {h} from "vue";
import {NIcon} from "naive-ui";

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}




export  let dashBoard = [
    {
        label:"首页",
        key:"首页",
        path:"/dashboard/",
        icon:renderIcon(RiHome2Fill)
    },
    {
        label:"项目",
        key:"项目",
        path:"/dashboard/project",
        icon:renderIcon(BsBoxSeamFill)
    },
    {
        label:"设置",
        key:"设置",
        path:"/dashboard/setting",
        icon: renderIcon(AiFillSetting)
    }
]

