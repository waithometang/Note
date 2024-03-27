"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型注解
let myName = "zhangsan";
let isExit = false;
// 类型推导
let myAge = 20; // number
// 通过接口 IPerson 明确指定了对象的结构，属性不能增多或减少
let person1 = { name: "lisi", age: 20 };
let person2 = {
    name: "wangwu",
    age: 18,
};
