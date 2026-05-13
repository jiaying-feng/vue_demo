//实现功能:一个组件发送登录事件(发送数据)
//一个组件接收登录事件传来的数据
//组件通信用中央事件总线实现
import mitt from "mitt";
// 明确用户类型
export interface UserItf{
  username: string
  permission: string
}
// 显示的定义事件类型
export type Events = {
  "user:login": UserItf
  "user:logout": void
  "change:Permission": string
}
// 创建中央事件总线实例
const eventBus = mitt<Events>()
// 模块，所以需要导出导出才能使用
export default eventBus