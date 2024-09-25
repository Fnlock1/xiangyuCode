// json 物料定义
import {getComponentsNameArray} from "@/utils/index.js";

class dsl {
    renderViewList = []
    async constructor() {
        this.renderViewList =   await getComponentsNameArray()
    }
    createItem(item){

    }
    delId(id){

    }


}



let dslX = new dsl();
