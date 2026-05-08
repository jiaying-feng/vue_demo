<script setup lang="ts">
import { reactive, toRefs } from 'vue';
//冯佳盈24级软件三班246230330

//toRefs()方法将reactive对象解构成响应式数据
//解构：将数组或对象提取数据并直接赋值给变量
//数组:
let arr =[1,2,3,4,5,6,7,8,9]
let [a,b,c,...d]=arr//解构 ...d剩余参数
console.log(a,b,c,d);//1 2 3 (6) [4,5,6,7,8,9]
//对像结构
let obj={
    name:"冯佳盈",
    age:20,
    gender:"女",
    id:"xxxxx"
    
}
//对象解构出的数据必须要被使用
//解构可以只解构对应的属性
// let {name,age}=obj//解构
// console.log(name,age);

let objReact=reactive(obj)
//objReact里的name,age结构出来
//let {name,age}=objReact//普通解构，解构出来的数据是普通数据
let {name,age}=toRefs(objReact)//此时name和age被解构成响应式数据
//onjreact虽然是reactive对象，直接获取代理对象，不需要.value获取数据源
//objReact解构出来的name和age都是ref对象，所以name和age需要用.value获取数据源
const hdClick =(()=>{
    age.value++
    console.log(age.value)
    

})




</script>

<template>
     <p>姓名：{{ objReact.name }}</p>
    <p>年龄：{{ objReact.age }}</p>
    <button @click="objReact.age++">按钮</button>
    <hr>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="hdClick">按钮</button>
  
</template>

<style scoped lang="scss">
  
</style>