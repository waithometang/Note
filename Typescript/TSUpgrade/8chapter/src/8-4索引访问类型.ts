// 索引访问类型
type Person = { age: number; name: string; alive: boolean };
// type Age = number
type Age = Person["age"];

// 联合类型索引
// type I1 = number | string
type I1 = Person["age" | "name"];
// type I2 = string | number | boolean
type I2 = Person[keyof Person];

// 使用 number 来获取数组元素的类型
const array = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]
// type TArr = {
//     name: string;
//     age: number;
// }
type TArr = typeof array[number]
  
export {}
