

class Class2 {

    constructor(public arg1: string, public arg2: string, public arg3: string) {



    }
}
let obj1: Class2 = new Class2("Rakesh", "Brad pit", "chadwick");
console.log(obj1)

let obj2: Class2 = new Class2("Rakesh", "Brad pit", "chadwick");
console.log(obj2.arg1, obj2.arg2, obj2.arg3);