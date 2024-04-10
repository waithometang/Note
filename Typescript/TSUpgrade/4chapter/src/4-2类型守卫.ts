// 类型守卫：会在块级作用域中缩小变量类型

// 类型判断 typeof 检测范围：stirng,number,undefined,symbol,bigint,boolean,object,function
const arr = [1, 2, 3];
const map = new Map();
const set = new Set();
console.log(typeof arr); // object
console.log(typeof map); // object
console.log(typeof set); // object
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(map)); // [object Map]
console.log(Object.prototype.toString.call(set)); // [object Set]

// instanceof 实例判断
class Animal {
  constructor(public name: string) {
    this.name = name;
  }
}
class Horse extends Animal {
  run() {}
}
class Snake extends Animal {
  climb() {}
}

class Dog {
  excutor(me: Horse | Snake) {
    if (me instanceof Horse) {
      // me.name .run
    } else {
      // me.name .climb
    }
  }
}
// typeof
function getLen(num: number | string) {
  if (typeof num === "number") {
  } else {
  }
}
// in如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true。
let obj = { name: "zs", say: function () {}, age: 20 };
console.log("name" in obj); // true

export {};
