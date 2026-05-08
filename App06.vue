<!--24软件三班冯佳盈246230330-->
<script setup lang="ts">
import{ref,reactive} from 'vue';
//使用reactive实现复杂数据类型的响应式
let obj={
    username:"张三",
    psw:123
}
//总结
//ref一般用于实现基础数据类型的响应式
//reactive 一般用于实现复杂数据类型的响应式
let objRef=ref(obj)
console.log("objRef:",objRef)//响应式对象中所有属性
console.log("objRef.value:",objRef.value);//Proxy(Object)
console.log("objRef.value.username:",objRef.value.username);

let objReact=reactive(obj)
console.log("objReact:",objReact)//Proxy(object)直接获取对象，不需要.value获取
console.log("objReact.psw:",objReact.psw)




</script>

<template>
  
</template>

<style scoped lang="scss">

</style>