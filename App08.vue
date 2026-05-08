<script setup lang="ts">
import {onUnmounted, ref,watch} from 'vue';
//watch监听基础数据类型
//let num=1//普通数据不会发生变化，监听的数据一定是响应式数据
let num =ref(1)

/**
   * watch 源代码
   * export declare function watch<T>
   * (
   *   source: WatchSource<T>,
   *   cb: MaybeCallback<T>,
   *   options?: WatchOptions<Immediate>
   * ): WatchHandle;
   * 
   * 泛型 (表示监听的数据类型)
   * immediate: extends Readonly<boolean> = false // 是否立即执行回调 (默认参数)
   * cb: 回调函数
   * source: WatchSource<T> // 要监听的数据源
   * cb: MaybeCallback<T>, Immediate? // 监听回调函数 (可以获取更)
   * options?: WatchOptions<Immediate> // 可缺省
   * ): WatchHandle; // 返回值类型 WatchHandle，返回值可以手动停止监听
   * 
   * watch(要监听的响应式数据, 数据更新时执行的回调函数)；返回值用于手动停止监听
   * 总结：回调函数参数出现时一定是箭头函数的形式
   */

  
   let stopWatch=watch(num, (newVal, oldVal) => {
    console.log("更新后的值：", newVal, "，更新前的值：", oldVal);
    if (newVal === 10) {
      console.log("num 达到 10 了，停止监听！")
      stopWatch()//调用stopWatch()手动停止监听
    }
  })
  //为防止内存泄漏（仅停止监听，但未销毁）
  onUnmounted(()=>{
    stopWatch()//销毁
  })
  //停止监听后按下按钮依然会num++
  //1 普通方法
  let num2=ref(1)
  const hdClick=()=>{
    if(num2.value<10){
        num2.value++
        console.log("更新后的值：",num2.value);
        
    }
    else{
        console.log("num达到10了,不能再增加了！");
        
    }
  }
  //2 监听:num3达到10时，禁用按钮
  //方法一
  let num3=ref(1)
  let isDisabled=false
  let stopWatch2=watch(num3,(newVal,oldVal)=>{
    console.log("更新后的值：",newVal,"更新前的值:",oldVal)
    if(newVal==10){
        console.log("num达到10了,停止监听！")
        isDisabled=true
        stopWatch2()//调用stopWatch()手动停止监听
        
    }
    
  })
  //方法二：使用ref获取DOM标签，当num4达到10时停止监听并禁用按钮4
  let num4=ref(1)
  let obtn=ref()//拿到实例
  console.log(obtn);//button的节点
  console.log(obtn.value);//undefined
  

  


  let stopWatch3=watch(num4,(newVal,oldVal)=>{
    console.log("更新后的值：",newVal,"更新前的值:",oldVal)
    if(newVal==10){
        console.log("num达到10了，停止监听！")
        console.log(obtn.value);
        obtn.value.disabled=true//在往btn标签里添加disabled的属性
        
        
        stopWatch3()//调用stopWatch()手动停止监听
        
    }
    
  })


</script>

<template>
    <p>{{ num }}</p>
    <button @click="num++">按钮</button>
    <p>{{ num2 }}</p>
    <button @click="hdClick">按钮</button>
    <p>{{ num3 }}</p>
    <button @click="num3++":disabled="isDisabled">按钮3</button>
    <p>{{ num4 }}</p>
    <button @click="num4++" ref="obtn">按钮4</button>
  
</template>

<style scoped lang="scss">
  
</style>



  
  
  
 
  
 