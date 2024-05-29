"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.getLegs = function () {
    return 2;
  };
  Person.prototype.say = function () {
    console.log("hello:", this.name);
  };
  return Person;
})();
var person = new Person("zhangsan", 20);
person.say(); // hello: zhangsan
