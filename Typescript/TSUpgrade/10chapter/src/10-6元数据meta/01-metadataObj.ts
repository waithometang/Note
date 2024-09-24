// 在对象上获取元数据

import "reflect-metadata";

const obj = {
  name: "张三",
  age: 18,
  say() {
    console.log("你好，我叫" + this.name);
  },
};
// 定义元数据
Reflect.defineMetadata("objMeta", "对象元数据", obj);
// 获取元数据
console.log(Reflect.getMetadata("objMeta", obj));

Reflect.defineMetadata("propName", "属性元数据", obj, "name");
console.log(Reflect.getMetadata("propName", obj, "name"));

// 判断对象或属性上是否存在元数据
if (Reflect.hasMetadata("name", obj)) {
  console.log("存在对象元数据");
} else {
  console.log("不存在对象元数据");
}

if (Reflect.hasMetadata("propName", obj, "name")) {
  console.log("存在name元数据");
} else {
  console.log("不存在name元数据");
}

export {};
