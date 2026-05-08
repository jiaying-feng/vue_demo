export{}
//函数的一版写法
function  fn1(a:number,b:number) {
    return a+b
    
}
console.log(fn1(1,1));

//接口定义函数类型
interface FnItf{
    (p:string):number
}
let fn2:FnItf=(a:string)=>{
    console.log(a);
    
    return 1
}
console.log(fn2("zahngsan"));

//类型别名定义函数类型
type FnType=(p:string)=>void//void表示返回值类型//定义函数
let fn3:FnType=(b:string)=>{
    console.log(b);
    
}
fn3("里斯")

//接口中：//函数作为对象的属性出现时的写法
interface ObjItf{
    fn4:FnItf
}
//方法一:箭头函数的写法
let obj1:ObjItf={
    fn4:(p:string)=>{
        console.log(p);
        return 1
        
    }
}
//方法二：普通函数的写法
let obj2:ObjItf={
    fn4(p:string){
        console.log(p);
        return 2
        
    }
}
console.log(obj1.fn4("狗"),obj2.fn4("猫"));

//类型别名中：函数作为对象的属性出现时的写法
type ObjType={
    fn5:(p:string)=>number

}
//方法一：
let obj3:ObjType={
    fn5:(p:string)=>{
        console.log(p);
        return 3
    }
}
//方法二：
let obj4:ObjType={
    fn5(p:string){
        console.log(p);
        return 4
    }
}
console.log(obj3.fn5("猪"),obj4.fn5("鱼"));
