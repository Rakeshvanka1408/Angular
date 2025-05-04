var Class1 = /** @class */ (function () {
    // public constructor(techt1:string,tech2:string,tech3:string){
    //  this.tech1=this.tech1;
    // }
    function Class1() {
        this.tech1 = "Angular";
        this.tech2 = "SpringBoot";
        this.tech3 = "Java";
    }
    Class1.prototype.getTech1 = function () {
        return this.tech1;
    };
    Class1.prototype.getTech2 = function () {
        return this.tech2;
    };
    Class1.prototype.getTech3 = function () {
        return this.tech3;
    };
    return Class1;
}());
var obj = new Class1();
console.log(obj.getTech1(), obj.getTech2(), obj.getTech3());
