<script setup lang="ts">
//3 接收
// //方法一：接受从父组件传来的数据
// const props=defineProps({
//     cNum:{
//         type:Number,
//         default:0
//     }
// })
//方法二：
const props=defineProps(["cNum"])
//申明子组件可以触发的事件
// //方法一：

// const emit=defineEmits<{
//     //(事件名，更新后的值)：函数的返回值类型
//     //注意：
//     //1 v-model的子传父不需要在父组件中提供修改父组件变量/属性(num)的方法(changeNum)
//     //2 update是一个固定写法，即更新父组件v-model:后的值（cNum）为n
//     //3 子组件通过emit("update:cNum",100)更新父组件的num为n,实现了双向数据绑定（数据流像是双向数据流)
//     //4 update:cNum无空格
//     (event:"update:cNum",n:number):void

// }>()
//方法二：
const emit=defineEmits(["update:cNum"])

const hdClick=()=>{
    emit("update:cNum",100)
}
//随堂：实现功能：按下子组件按钮实现num++和cNum++
let temp=props.cNum
const hdClick2=()=>{
    //emit("update:cNum",cNum++)//报错：Cannot find name 'cNum'
    //emit("update:cNum",props.cNum++)//报错：read-only
    temp++
    emit("update:cNum",temp)
}

</script>

<template>
     <p>子组件</p>
    <p>子组件的num={{cNum}}</p>
    
    <button @click="hdClick">子组件的按钮</button>
    <button @click="hdClick2">子组件的按钮2</button>
  
</template>

<style scoped lang="scss">
  
</style>