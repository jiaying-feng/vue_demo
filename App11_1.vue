<script setup lang="ts">
import { reactive, computed } from 'vue';

// 根据生日和当前时间推导一个人的年龄 (computed)
let objReact1 = reactive({
  name: "张三",
  birthday: "2006-4-14"
})

// let objReact2 = reactive({
//   name: "李四",
//   birthday: "2006-4-16"
// })

let age = computed(() => {
    //获取当前时间
  let now=new Date()
  let curYear=now.getFullYear()
  let curMonth=now.getMonth()+1//月份是从0开始
  let curDay=now.getDate()
  console.log(curYear,curMonth,curDay);//2026.4.15

   //解析生日
   //方法一：forEach方法
// console.log(objReact1.birthday.split("-"));//(3)['2006','4','14']
// let myBirthdayArr:number[]=[]
// objReact1.birthday.split("-").forEach((ele)=>{
//     myBirthdayArr.push(Number(ele))
// })
// let [myYear,myMonth,myDay]=myBirthdayArr;

//方法二:map方法
let [myYear,myMonth,myDay]=objReact1.birthday.split("-").map(ele=>Number(ele))
let realAge=curYear-myYear
//curMonth=4 myMonth=8
//curMonth=4 myMonth=4 curDay=15 myDay=16
if(curMonth < myMonth || curMonth == myMonth && curDay < myDay){
    realAge--
}



//  objReact1.birthday.split("-");


 
 
  return realAge
  
})
// console.log(age);





</script>

<template>
  <div>
    <h3>人员信息</h3>
    
  </div>
</template>

<style scoped lang="scss">

</style>