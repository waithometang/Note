/**
 * 接口是用来定义对象类型的类型
 * 优点：
 *      1、可以继承
 *      2、提供方法的对象类型的参数时使用
 *      3、为多个同类别的类提供统一的方法和属性声明
 */
interface Pet {
  name: string;
  age: number;
  say(): void; // 定义方法签名，不能实现
}
// 继承
interface Dog extends Pet {
  legs: number;
}
// 参数使用
function getDogInfo(dog: Dog) {}
const d: Dog = {
  name: "wangcai",
  age: 1,
  legs: 4,
  say() {
    console.log("wang~");
  },
};
getDogInfo(d);
// 统一方法声明
interface List {
  add(): void;
  delete(): void;
}
class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}
class LinkList implements List {
  add(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}
export {};
