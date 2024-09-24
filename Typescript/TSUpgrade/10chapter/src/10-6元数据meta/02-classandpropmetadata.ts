// 在类和方法上获取获取元数据

import "reflect-metadata";

@Reflect.metadata("describe", "地球人")
class People {
  @Reflect.metadata("describe", "姓名不能包含非法汉字")
  username = "lisi";
  @Reflect.metadata("important", "烤鸭好吃吗？")
  eat() {}
}
// 类上获取
console.log(Reflect.getMetadata("describe", People)); // 地球人
// 注意：方法是在类原型上
console.log(Reflect.getMetadata("important", People.prototype, "eat")); // 烤鸭好吃吗？
// 判断是否存在元数据，可通过继承得到
if (Reflect.hasMetadata("important", People.prototype, "eat")) {
  console.log("存在");
} else {
  console.log("不存在");
}

class Alien extends People {
  say() {}
}
// 可通过继承得到
if (Reflect.hasMetadata("important", Alien.prototype, "eat")) {
  console.log("继承得到");
} else {
  console.log("没有");
}
// 判断自身是否有
if (Reflect.hasOwnMetadata("important", Alien.prototype, "eat")) {
  console.log("hasOwnMetadata");
} else {
  console.log("自身不存在");
}

export {};
