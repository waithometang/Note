// The keyof operator takes an object type and produces a string or numeric literal union of its keys.
// keyof 运算符采用对象类型并生成其键的字符串或数字文本并集。
type Gender = "male" | "female" | "未知";
interface Person {
  name: string;
  age: number;
  gender: Gender;
}
// in keyof相当于for in，遍历对象的key
/**
 * {
    name: string;
    age: number;
    gender: Gender;
    }
 */
type PersonType = {
  [P in keyof Person]: Person[P];
};
// 定义泛型
type GenericityType<T> = {
  [K in keyof T]: T[K];
};

let p: GenericityType<Person> = {
  name: "zs",
  age: 10,
  gender: "male",
};

type Point = {x:number;y:number;}
type P = keyof Point // type P = "x" | "y"

type ArrayIndex = { [n: number]: unknown }
type AK = keyof ArrayIndex // type AK = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish // type M = string | number


export {};
