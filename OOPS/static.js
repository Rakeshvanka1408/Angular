var Static = /** @class */ (function () {
    function Static() {
    }
    Static.fun = function () {
        return this.wish;
    };
    Static.wish = "Welcome to Hyderabad";
    return Static;
}());
console.log(Static.fun());
