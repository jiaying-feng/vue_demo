<script setup lang="ts">
import { reactive,toRefs,watch } from 'vue';

//watch监听复杂数据类型
let obj={
    num1:1,
    num2:100
}
let objReact=reactive(obj)
//方法一：解构用watch监听（相当于在监听基础数据的响应式）
// let{num1}=objReact//num1是普通数据，响应式数据才能监听
let {num1}=toRefs(objReact)//num1是响应式数据
watch(num1,(newVal,oldVal)=>{
    console.log("更新后的值：",newVal,"更新前的值：",oldVal);

    
})
//方法二：不解构
//报错： obj.react.num是普通数据，不能监听
// console.log(obj.react.num) // 普通数据 不能监听
//watch(obj.react.num, newVal, oldVal) => {
  // console.log("更新后的值：", newVal, "更新前的值：", oldVal)
//})

// console.log(objReact.num2);//普通数据，不能监听

// export type WatchSource<T> = Ref<T> | Reactive<T> | ComputedRef<T> | (() => T);
// watch第一个参数可以是回调函数
// num=>num.getter函数返回num，可以通过getter函数的返回值的
watch(()=>objReact.num2,(newVal,oldVal)=>{
    console.log("更新后的值：",newVal,"更新前的值：",oldVal);
})


//注意：一般不监听整个对象，只监听对象的某个属性（否则会触发多个回调）
// watch(objReact,()=>{
//     console.log("objReact变化了");
    
// })
// objReact.num1=20
</script>

<template>
    <p>{{ num1 }}</p>
<button @click="num1++">按钮1</button>

<p>{{ objReact.num2 }}</p>
<button @click="objReact.num2--">按钮2</button>
  
</template>

<style scoped lang="scss">
  
</style>