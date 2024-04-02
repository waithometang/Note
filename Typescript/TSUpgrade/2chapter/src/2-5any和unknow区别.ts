/**
 * any和unknow
 * 相同点：
 *      1、any和unkonw可以使任何类的父类，任何类型变量都可以赋值给any或者unknow类型变量
 * 不同点：
 *      1、any可以是任何类型的子类，但unknow不可以，any类型的变量都可以赋值为其他类型的变量
 *      2、any可以或者任意名称的属性和方法，unknow类型变量不可以
 */
// PS:any和Object/{}区别：任何类型都可以赋值给any，除undefined和null类型都可以赋值给Object/{}
// 相同点
let a1: /* 父类 */ any = 123; /* 子类 */
let u1: unknown = 234;
a1 = false;
u1 = "unknow";
// 不同点
let b1: number = a1;
// let b2: boolean = u1; // 不能将类型“unknown”分配给类型“boolean”
a1.say();
// u1.name // “u1”的类型为“未知”
export {};
