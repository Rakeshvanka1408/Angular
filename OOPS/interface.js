// Implementation through class
var class1 = /** @class */ (function () {
    function class1() {
        this.tech = "Interface implementation ";
    }
    return class1;
}());
console.log(new class1().tech);
//Implementation through JSON.
var obj1 = {
    "tech": 'Angular'
};
var obj2 = {
    tech: "Sngular 2"
};
console.log(obj1);
console.log(obj2);
var class2 = /** @class */ (function () {
    function class2() {
    }
    class2.prototype.festack = function () {
        return "Interface implementation";
    };
    return class2;
}());
console.log(new class2().festack());
// implementation through json object
var obj3 = {
    festack: function () {
        return "React";
    }
};
var obj4 = {
    festack: function () {
        return "VS Code";
    }
};
console.log(obj3);
console.log(obj4);
var age = {
    maheshAge: function () {
        console.log("mahesh age is 19");
    },
    rakeshAge: function () {
        console.log("Rakesh age is 22");
    },
    venkatestAge: function () {
        console.log("mahesh age is 24");
    }
};
console.log(age.maheshAge(), age.rakeshAge(), age.venkatestAge());
