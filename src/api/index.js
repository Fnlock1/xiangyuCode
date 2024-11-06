let  apiRootUrl = 'http://127.0.0.1:8000/v1/'
export let api = {
    // 获取项目列表 杂草的 你就自己本地运行的项目搞鸡毛分页
    projectPaginate:apiRootUrl+'projects',
    projectCount:apiRootUrl+'projects/count',
    // 创建 项目中的 页面
    projectPageAdd:apiRootUrl+'pages',
    projectPageGetId:apiRootUrl+'pages',
    projectPageDelId:apiRootUrl+'pages',
    // 获取项目配置
    projectPageConfigGet:apiRootUrl+'projectConfig',
    projectPageConfigAdd:apiRootUrl+'projectConfig'
}