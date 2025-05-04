
/*
    inheritance

*/
class inheritance {

     fun_one(): string {
        return "Thanos"
    }
}
class inheritance1 extends inheritance {

     fun_two(): string {
        return "Villain"
    }
}
let ob:inheritance = new inheritance();
let ob1:inheritance1 = new inheritance1();
console.log(ob1.fun_one());
console.log(ob1.fun_two());