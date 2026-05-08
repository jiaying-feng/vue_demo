//冯佳盈 246230330 24级软件三班
export{}//手动导出为空
console.log("冯佳盈 246230330 24级软件三班");
//ts会在解析时自动导出文件中所有变量

//ts非原始数据类型：object Object {}
//object 不包含基础数据类型(常用)
let obj1:object={
    a:1
}//对象
let arr1:object =[1,2,3]//数组
console.log(obj1,arr1);
//let str1:object="1"//报错
//let num1:object=1//报错

//Object 包含基础数据类型(不常用)
let obj2:Object={
    b:2
}
let arr2:Object=[4,5,6]
let str2:Object="2"
let num2:Object=2
let bool2:Object=true
console.log(obj2,arr2,str2,num2,bool2);

//{} 包含基础数据类型(不常用)
let obj3:{}={
    b:2
}
let arr3:{}=[4,5,6]
let str3:{}="2"
let num3:{}=2

console.log(obj3,arr3,str3,num3);
