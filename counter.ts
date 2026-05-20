// pinia术语：
// 1 state: 表示仓库中的数据
// 2 getter: 计算属性，即加工的数据（自动追踪state，返回的结果可以被缓存）
// 3 action: 修改数据的方法（可以是同步也可以是异步）

import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 实现功能：计数器
// 命名方式：userXXXStore  XXX表示文件名
// defineStore创建仓库，存放全局变量和方法
// defineStore(store的唯一ID, store的配置项)
// store的唯一ID：文件名
// store的配置项：回调函数，里面写数据和方法
export const userCounterStore = defineStore("counter", ()=>{
    // state: 表示仓库中的数据
    const count = ref(0)
    const name = ref("张三")

    // getter: 计算属性，即加工的数据（自动追踪state，返回的结果可以被缓存）
    const dbCount = computed(()=>{
        return count.value * 2
    })
    const msg = computed(()=>{
        return "当前用户:" + name.value + "正在计数" + count.value
    })

    // action: 修改数据的方法（可以是同步也可以是异步）
    function increment(){
        count.value++
    }
    function decrement(){
        count.value--
    }
    function reset(){
        count.value = 0
    }
    function setName(newName: string){
        name.value = newName
    }

    // 在pinia中必须返回，相当于用return后才能暴露给组件，否则外部访问不到
    return{
        count, name, dbCount, msg,
        increment, decrement, reset, setName
    }
})

