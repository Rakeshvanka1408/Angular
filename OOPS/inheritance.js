var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    inheritance

*/
var inheritance = /** @class */ (function () {
    function inheritance() {
    }
    inheritance.prototype.fun_one = function () {
        return "Thanos";
    };
    return inheritance;
}());
var inheritance1 = /** @class */ (function (_super) {
    __extends(inheritance1, _super);
    function inheritance1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    inheritance1.prototype.fun_two = function () {
        return "Villain";
    };
    return inheritance1;
}(inheritance));
var ob = new inheritance();
var ob1 = new inheritance1();
console.log(ob1.fun_one());
console.log(ob1.fun_two());
