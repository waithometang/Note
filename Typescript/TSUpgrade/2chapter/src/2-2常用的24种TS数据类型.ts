/**
 * 1、基本数据类型：string,number,boolean,undefined,null,symbol
 * 2、跟类型：Object,{}
 * 3、对象类型：Array,object,function
 * 4、枚举：enum
 * 5、其他特殊类型：any,unknow,never,void,元组(tuple),可变元组
 * 6、合成类型：交叉类型,联合类型
 * 7、字面量类型
 */
// 根类型，可以赋值除null和undefined的所有类型
let o1: Object;
let o2: {};

o1 = 1;
o1 = false;
o2 = { age: 20 };

// 联合类型
let t: number | string = 1;
t = "123";

// type可以定义任意类型
type Name = { name: string };
type Age = { age: number };
let person1: Name = { name: "zhangsan" };
let person2: Age = { age: 20 };
// 交叉类型
let person3: Name & Age = { name: "lisi", age: 18 };

// 字面量类型 只能是后面定义的数字
type T = 0 | 1;
let flag: T = 1;

export {};
