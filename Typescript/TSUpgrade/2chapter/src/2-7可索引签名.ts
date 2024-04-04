/**
 * 可索引签名，代表的是不确定的属性名
 */
interface Product {
  id: number;
  price: number;
  name: string;
  // 固定写法
  [propKey: string]: any; // 字符串索引签名  名称是string，值是any，值必须兼容以上所有类型
}

const p: Product = {
  id: 1,
  price: 100,
  name: "phone",
  // 可任意增加属性,以下都是符合的
  color: "red",
  [Symbol("foo")]: "foo", // symbol
  100: true,
};

// 深入理解
const foo = Symbol("foo");
interface Animal {
  name: string;
  legs: number;
  bar(): void;
  [foo]: string;
}
// 获取Animal属性的类型，通过属性索引访问
// 注意：name是类型-字面量类型，不能当做是字符串
type N = Animal["name"]; // string
type L = Animal["legs"]; // number
type NL = Animal["name" | "legs"]; // string | number 联合类型
type B = Animal["bar"]; // () => void
// type F = Animal[foo] // “foo”表示值，但在此处用作类型。是否指“类型 foo”
type F = Animal[typeof foo]; // string 需要使用typeof获取变量的类型

// 获取所有属性名称
type AKeys = keyof Animal;
// const k: AKeys = "bar";不容易看出来AKeys的类型,还是type AKeys = keyof Animal;
// 借用以下方法，可以得出
type Pkeys<T> = T extends any ? T : never;
type PK = Pkeys<keyof Animal>; // "name" | typeof foo | "legs" | "bar"
