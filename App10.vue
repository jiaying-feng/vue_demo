<script setup lang="ts">
import { reactive,toRefs,watch,watchEffect } from 'vue';
//监听多个数据
let obj={
    num1:1,
    num2:100
}
let objReact = reactive(obj)
// //方法一：watch监听
// //(1)解构：监听数组的变化（数组里的元素是响应式）
let {num1,num2}=toRefs(objReact)
// //数组中只要有一个元素发生变化，就会执行回调
// watch([num1,num2],(newVal,oldVal)=>{
//     console.log("方法一：解构：更新后的值：",newVal,"更新前的值:",oldVal)

// })
// //(2)不解构：监听数组的变化（数组里的元素是getter函数）
watch([()=>objReact.num1,()=>objReact.num2],(newVal,oldVal)=>{
    console.log("方法1：不解构：更新后的值：",newVal,",更新前的值:",oldVal)
    
 })

// 方法二: watchEffect监听
// 1 watchEffect默认行为在注册时立即执行一次
// 2 只要watchEffect回调函数中有一个数据发生变化, 则watchEffect里的所有代码都会被执行
watchEffect(()=>{
  // 凡是写在回调函数中的数据, 只要发生变化就会触发回调
  console.log("num1发生变化", num1.value);
  console.log("num2发生变化", num2.value);
  console.log(1111111111);
  console.log("objReact.num1发生变化", objReact.num1);
  console.log("objReact.num2发生变化", objReact.num2);

  //问题：为什么在WATCH里不能直接监听objReact.null，而在watchEffect中能直接监听objReact.null?
  //在watch中objReact.num1是响应式的原始值(普通数据)watch不能直接监听普通数据，因为它需要明确的依赖追踪方式(ref.计算属性.getter函数)
  //在watchEffect中直接访问objReact.num1时，vue会自动建立依赖关系，并在num1变化时重新运行函数
})
//总结：
//1 若要拿到监听数据的新旧值，则使用watch
//2 若有多个数据要监听，并且有数据变化需要执行逻辑的场景，则用watchEffect
</script>

<template>
  <p>{{ num1 }}</p>
  <button @click="num1++">按钮1</button>
  <p>{{ objReact.num2 }}</p>
  <button @click="objReact.num2--">按钮2</button>
</template>

<style scoped lang="scss">

</style>



