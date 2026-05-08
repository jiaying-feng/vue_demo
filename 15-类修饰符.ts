//Public:被修饰的属性和方法可以在类的内部，子类，类的外部访问
//private：私有的，仅在类的内部卡内访问，子类，外部都不能访问
//protected:受保护的，在类的内部，子类中可以访问，类的外部不可以访问
console.log("246230330冯佳盈24软件三班")
class Person{
    constructor(public name:string,private age:number,protected gender:string){
        this.name=name
        this.age=age
        this.gender=gender
    }
    //用公共的方法间接的访问私有属性
    public getAge(){
        return this.age
    }
}

class Chinese extends Person{
    constructor(name:string,age:number,gender:string){
        super(name,age,gender)
    }
    public getGender(){
        return this.gender
    }
}
let p=new Person("张三",18,"男")
console.log(p.name);
// console.log(p.age);//报错
console.log(p.getAge());

// console.log(p.gender);//报错
let c=new Chinese("李四",19,"男")
//c.gender//报错
console.log(c.getGender());
