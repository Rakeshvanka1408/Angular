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
var override = /** @class */ (function () {
    function override() {
    }
    override.prototype.dbFunc = function () {
        return "Connected to oracle DB";
    };
    return override;
}());
var override1 = /** @class */ (function (_super) {
    __extends(override1, _super);
    function override1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    override1.prototype.dbFunc = function () {
        return "Connected to Mysql DB";
    };
    return override1;
}(override));
var obj = new override1();
console.log(obj.dbFunc());
