//abstraction

abstract class class1{
 abstract   mern(): void
   public mean(): String{
    return "this mean stack"
    }
}
class class2 extends class1{
    mern(): void{
        console.log("this is mern stack ")
    }
}
console.log(new class2().mern())