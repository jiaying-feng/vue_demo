export{}
console.log("246230330冯佳盈24软件三班")
class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    getName(){
        return this.name
    }
}
//子类
class Male extends Person{
    gender:string
    constructor(name:string,age:number,gender:string){
        //super相当于调用父类person的构造函数constructor
        super(name,age)
        this.gender=gender
    }
    //方法重写：重写父类的方法
    getName() {
        return "my name is"+this.name
        
    }
}
let male=new Male("张三",18,"boy")
console.log(male.getName());
