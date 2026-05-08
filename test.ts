//冯佳盈 246230330 24级软件三班
console.log("冯佳盈 246230330 24级软件三班");
//ts相较于js的优势：
//1 ts(强类型语言)减少调试和运行时的错误(对开发者友好)
//2 ts引入了类和接口的概念，支持继承，多态等面向对象的编程特性
//3 ts支持es6语法(包括模板字符串，解构赋值，箭头函数，类和对象，模块化，Promise对象等)

//js基础数据类型：string number bollean undefined null symbol(ES语法)
//ts原始类型：js基础数据类型+void
let str1="1"
let str2:string="2"
let num1:number=1
let bool1: boolean=true;

let und1:undefined=undefined//未定义
let nul1:null=null
//symbol是一种独特的且不可变的数据类型，用于表示唯一的值，主要用于避免对象属性名的冲突

let sy1:symbol =Symbol("我是唯一标识")
console.log(sy1);

//void类型标识“没有返回值”的函数或变量，它通常用于定义函数的返回值类型，标识该函数不返回任何值
let vo1:void=undefined


function fun1():void{
    console.log("这是fun1");

}
fun1()//函数需要调用

function fun2():undefined{
    console.log("这是fun2");
    return undefined;

}
fun2()//函数需要调用

function fun3():number{
    console.log("这是fun3");
    return 1

}
fun3()//函数需要调用