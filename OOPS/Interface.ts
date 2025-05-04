/*
Interfaces the class but not does not have any implementation
A method does not have any implementation is called as abstract method
A interface contains all abstract methods only
We can create an interface with interface keyword
Implementation to be provided through classes (Regular Java/dotnet)
In Typescript we can provide implementation through classes and JSON Objecs also

*/
interface interface1{
    tech: String;

}

// Implementation through class
class class1 implements interface1{
    tech: String = "Interface implementation ";
}
console.log(new class1().tech);

//Implementation through JSON.
let obj1: interface1 ={
    "tech":'Angular'
}
let obj2: interface1 ={
    tech: "Sngular 2"
}
console.log(obj1)
console.log(obj2)

interface interface2{
    festack(): string;
}
class class2 implements interface2{
    festack(): string {
        return "Interface implementation"
    }
}
console.log(new class2().festack())
// implementation through json object

let obj3: interface2={
   festack: () :string=>{
    return "React"
   }
}
let obj4: interface2={
    festack: () :string=>{
     return "VS Code"
    }
 }
 console.log(obj3)
 console.log(obj4)
//----------------------------------------------------------------
 // interface with extends keyword

 interface interface5{
     maheshAge(): void;
 }
 interface interface6{
    rakeshAge(): void;
 }
 interface interface7 extends interface5, interface6{
    venkatestAge(): void
 }

 let age: interface7={
    maheshAge:():void=>{
        console.log("mahesh age is 19")
    },
    rakeshAge:():void=>{
        console.log("Rakesh age is 22")
    },
    venkatestAge:():void=>{
        console.log("mahesh age is 24")
    }
    
 }
 console.log(age.maheshAge(),age.rakeshAge(),age.venkatestAge())