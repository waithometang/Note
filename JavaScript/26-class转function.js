/**
 * 类转function
 */

class Person1 {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
// 1、严格模式
("use strict");
function Person(name) {
  // 2、只能通过new来调用
  if (!new.target) {
    throw new TypeError(
      "Class constructor Person1 cannot be invoked without new"
    );
  }
  this.name = name;
}
// 3、原型上的属性或方法不能被枚举
Object.defineProperty(Person.prototype, "say", {
  value() {
    // 4、不能通过new方式调用
    if (new.target) {
      throw new TypeError("Person.prototype.say is not a constructor");
    }
    console.log(this.name);
  },
  enumerable: false,
});
Person.prototype.say = function () {
  console.log("say", this.name);
};
const p1 = new Person1("zhangsan");
const p = new Person("lisi");
