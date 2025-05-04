

class Class1 {

    private tech1: string;
    private tech2: string;
    private tech3: string;

    // public constructor(techt1:string,tech2:string,tech3:string){

    //  this.tech1=this.tech1;
    // }
     constructor() {
        this.tech1 = "Angular";
        this.tech2 = "SpringBoot";
        this.tech3 = "Java";

    }


    public getTech1():string{
        return this.tech1;
    }
    public getTech2():string{
        return this.tech2;
    }
    public getTech3():String{
        return this.tech3;
    }
   
}
let obj:Class1 = new Class1()
console.log(obj.getTech1(),obj.getTech2(),obj.getTech3())
