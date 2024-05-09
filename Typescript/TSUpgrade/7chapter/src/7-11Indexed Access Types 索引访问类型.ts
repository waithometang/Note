type Person = { name: string; age: number; alive: boolean }
type MyName = Person["name" | "age"] // type MyName = string | number

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 12 },
];
// type Item = {
//     name: string;
//     age: number;
// }
type Item = typeof MyArray[number]
type Mname = Item["name" | "age"] // type Mname = string | number

// 索引时只能使用类型，这意味着不能使用 a const 来引用变量：
const key = "age"
// type Age =Item[key]// Type 'key' cannot be used as an index type.'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'
export {}
