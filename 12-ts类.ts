export{}
console.log("246230330冯佳盈24软件三班")
//长方形：计算长方形的面积和周长
class Rectangle{
    //声明类成员变量
    length:number
    width:number
     // java中构造函数必须和类名保持一致，构造函数没有返回值
     //构造函数什么时候被调用 对象被创建时自动调用的构造函数
     // Rectangle(){

    // }
    //构造器/构造函数
    constructor(leng:number,wid:number){
        this.length=leng
        this.width=wid

    }
    //类成员方法
    getArea(){
        return this.length*this.width
    }
    getCirc(){
        return (this.length+this.width)*2
    }
}
//实例化对象
//在实例化对象(new)时自动调用constructor构造器
let rect=new Rectangle(2,1)
console.log("长方形的长为:",rect.length,",宽为",rect.width,",面积为:",rect.getArea(),",周长为：",rect.getCirc());
//定义类的同时，相当于生成了同名称的接口
interface RectangleItf{
    length:number
    width:number

    getArea:()=>number
    getCirc:()=>number
}
let rect2:RectangleItf={
    length:1,
    width:1,
    getArea(){
        return this.length*this.width
    },
    getCirc() {
        return (this.length+this.width)*2
    }
   
}

 console.log("长方形的长为:",rect.length,",宽为",rect.width,",面积为:",rect.getArea(),",周长为：",rect.getCirc());
 //接口中定义的属性不会再接口中赋值,接口中定义的方法不会在接口中具体实现，接口在定义该接口类型的变量时实现赋值操作和方法实现操作
 //类中定义的属性会在类中赋值(constructor)，类中定义的方法会在类中具体实现
 /*总结：
 类和接口的区别：
 1.接口主要用于定义数据结构，允许声明方法而不提供实现，类则用于声明并实现方法
 2.接口更加抽象和灵活，适合定义对象的状态和行为，类则更加记忆体和实用，用于创建对象的实例

 
 */