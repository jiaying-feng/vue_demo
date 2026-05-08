<!--24软件三班冯佳盈246230330-->
<script setup lang="ts">
import {ref} from 'vue'
//ref操作复杂数据类型
let obj={//复杂数据类型
    name:"张三",
    age:18
}
let objRef=ref(obj)//objRef是复杂数据类型的响应式对象
console.log(objRef)//响应式对象
console.log(objRef.value);//Proxy(Object)代理对象，可以实现高效全面的响应式追踪//roxy()

console.log(objRef.value.name);
console.log(objRef.value.age);



const hdClick=()=>{
    objRef.value.age++
    console.log(objRef.value.age);
    
}
</script>

<template>
    <p>{{ objRef.name }}</p>
    <p>{{ objRef.age }}</p>
    <button @click="objRef.age--">按钮</button>
    <button @click="hdClick">按钮</button>
  
</template>

<style scoped lang="scss">

</style>