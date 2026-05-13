// 中央事件总线（Event Bus）：相当于一个全局广播站，任何组件都可以向它发送事件，任何组件都可以监听事件，组件和组件之间不需要任何直接联系

// mitt库：前端库，体积200字节（约等于0.2kb）
// 一般用于组件通信，用eventBus实现跨组件通信
// 常用方法：on  emit   off

// 下载mitt库：npm i mitt
import mitt from "mitt";

// 创建事件总线实例
// const emitter = mitt()

// 明确user类型
interface UserItf{
    username: string
    permission: string
}

// on: 监听事件
// emitter.on(要监听的事件名, 事件被触发后执行的回调)
// user表示接收方接受到的数据
// on报错：事件类型推断问题
// 解决方法：手动指定事件类型
// emitter.on("user:login", (user: UserItf)=>{
//     console.log("欢迎", user.username, "登录");
//     console.log("权限：", user.permission)
// })

// 显示的定义事件类型
type Events = {
    // 定义事件名: 事件类型
    "user:login": UserItf
}
// 重新创建事件总线实例(是将定义好的事件类型以泛型的方式传递进来)
const emitter = mitt<Events>()
// on: 监听事件（接收方）
// emitter.on(要监听的事件名, 事件被触发后执行的回调)
// user表示接收方接受到的数据
emitter.on("user:login", (user: UserItf)=>{
    console.log("欢迎", user.username, "登录");
    console.log("权限：", user.permission)
})

let person: UserItf = {
    username: "张三",
    permission: "管理员权限"
}
// emit: 触发事件（发送方）
// 发送方通过触发事件将数据传到中央事件总线上
// emitter.emit(要触发的事件名, 要发送的数据)
emitter.emit("user:login", person)

// off: 移除监听(组件销毁后，监听事件依旧会执行，会导致内存泄漏)
emitter.off("user:login")
// 拓展：移除所有监听
emitter.all.clear()
