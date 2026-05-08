export{}
//interface 接口关键字 常用于自定义类型
//定义接口类型：给对象用
interface PersonItf{//定义类型接口
    //属性名：值类型
    name:string,
    age:number,
    gender:string

}
let obj:PersonItf//声明类型
obj={//赋值操作
    name:"张三",
    age:18,
    gender:"男"
}
console.log(obj);
let obj2:PersonItf={
    name:"李四",
    age:18,
    gender:"男"
}
console.log(obj);


//定义接口：给数组用
interface ArrItf{

    //[ idx:number]表示下标类型
    //number|string表示数组的值类型
   [ idx:number]:number|string

}
let arr:ArrItf
arr=[1,"2","zhangsan",3]
console.log(arr);
let arr2:ArrItf=["lisi",4,5]
console.log(arr2);

//定义接口类型：给函数用(es6语法：箭头函数)
interface FnItf{
    //(p:string,q:number)表示函数形参和其他类型
    //number表示返回值类型
    (p:string,q:number):number

}
let fn:FnItf= (p:string,q:number)=>{
    console.log(p,q);
    return 1
}
console.log(fn("王五",20));