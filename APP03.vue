<!--24软件三班冯佳盈246230330-->
<script setup lang="ts">
import {ref,type Ref} from "vue";
//ref方法操作的基本数据类型的数据
//双向数据绑定：当数据发生变化时，视图也发生变化；当视图发生变化时，数据也会跟着同步发生变化
//let num=1//num普通数据
let num = ref(1)
//定义响应式数据对象方法二：
let num2: Ref<number>=ref(2)
console.log(num)//响应式数据对象
console.log(num2.value)//要在ts里操作响应式数据需要用.value获取





const hdClick=()=>{
    if(num.value>1){
        num.value--
    }
    
    console.log(num)
}
</script>


<template>
    <!--{{  }}表示双向数据绑定-->
      <!-- 在模板template里帮我们提前.value获取过了-->

  <!--实现不了双向数据绑定，Num不是响应式数据-->
  <button @click="num++">+</button>
  {{ num }}
  <button @click="hdClick">-</button>
</template>

<style scoped lang="scss">

</style>