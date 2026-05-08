
<script setup lang="ts">
import { watchEffect,reactive } from 'vue';


// 外面配送进度通知：模拟外卖订单状态的变化（准备中 → 配送中 → 已送达 → 已取消），并在状态变化时打印对应的通知信息。如：
// 准备中——》通知: 张三 的 黄焖鸡 正在准备中，请耐心等待！
// 配送中——》通知: 张三 的 黄焖鸡 正在配送中, 预计30分钟内送达!
// 已送达——》通知: 张三 的 黄焖鸡 已送达至 成都农业职业学院 , 祝您用餐愉快!
// 已取消——》通知：订单 张三 的 黄焖鸡 已取消，退款将在 1-3 个工作日内到账。
let obj={
    customer:"冯佳盈",
    orderItem:"黄焖鸡",
    address:"成都农业科技职业学院",
    status:"准备中"
}
let order=reactive(obj)
watchEffect(()=>{
    switch(order.status){
        case "准备中":
            console.log("通知：",order.customer,"的",order.orderItem,"正在准备中，请耐心等待！");
            break;
        case "配送中":
            console.log("通知：",order.customer,"的",order.orderItem,"正在配送中，预计38分钟内送达！");
            break;
        case "已送达":
            console.log("通知：",order.customer,"的",order.orderItem,"已送达至，",order.address,",祝您用餐愉快！");
            break;
        case "已取消":
            console.log("通知：",order.customer,"的",order.orderItem,"已取消，退款将在1-3个工作日内到账");

            

    }
})
//模拟订单状态的变化（后端）
//定时器setTimeout(延迟后要执行的回调函数，延迟时间)
setTimeout(()=>{
    order.status="配送中"
},2000)

setTimeout(()=>{
    order.status="已送达"
},4000)
setTimeout(()=>{
    order.status="已取消"
},6000)


</script>

<template>
  
</template>

<style scoped lang="scss">
  
</style>