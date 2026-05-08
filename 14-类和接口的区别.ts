export{}
console.log("246230330冯佳盈24软件三班");

/*总结：
类和接口的区别：
1 接口主要用于定义数据结构，允许声明方法二不提供实现。类则用于声明并实现方法
2 接口更加抽象和灵活，适合定义对象的状态和行为。类则更具体和实用，用于创建对象的实例
3 一个类只能继承自另一个类（相当于不能实现多继承（python可以），而一个接口可以被多个类实现，且一个类可以实现多个接口） 
4.类支持访问修饰符，接口不支持*/
//一个接口可以被多个类实现 类实现接口（implements）
interface Animal{
    name:string
    makeSound:()=>void
}
class Dog implements Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    makeSound(){
        console.log("往往");
        
    }
}
let dog=new Dog("金毛")
console.log(dog.name);
dog.makeSound()

class Cat implements Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    makeSound(){
        console.log("喵喵喵");
        
    }
}
let cat=new Cat("缅因")
console.log(cat.name);
cat.makeSound()

//一个类可以实现多个接口
interface AreaItf{
    calculateArea:()=>number
}
interface CircItf{
    calculateCirc:()=>number
}
//圆
class Circle implements AreaItf,CircItf{
    radius:number//半径
    constructor(radius:number){
        this.radius=radius
    }
    calculateArea(){

        return Math.PI*Math.pow(this.radius,2)
    }
    calculateCirc(){
        return 2* Math.PI*this.radius
        
    }
}
let circle=new Circle(2)
console.log("圆的半径：",circle.radius,",面积：",circle.calculateArea().toFixed(2),",周长：",circle.calculateCirc().toFixed(2));
