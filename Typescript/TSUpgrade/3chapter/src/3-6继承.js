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
var Animal = /** @class */ (function () {
    function Animal(color, age, gender) {
        this.color = color;
        this.age = age;
        this.gender = gender;
    }
    Animal.prototype.say = function () {
        console.log("i am animal");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(color, age, gender, name) {
        var _this = _super.call(this, color, age, gender) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i am dog");
    };
    return Dog;
}(Animal));
var d = new Dog("black", 2, "female", "wangcai");
console.log(d);
