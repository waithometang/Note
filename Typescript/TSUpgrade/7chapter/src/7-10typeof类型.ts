// typeof 不能用于表达式
let s = "hello";
let n: typeof s;
console.log(typeof "Hello world")

// ReturnType  采用函数类型并生成其返回类型
type IsTimeout = () => boolean;
let isTimeout: ReturnType<IsTimeout> = true

function f() {
  return { name: "zs", age: 23 }
}
// let fun: {
//     name: string;
//     age: number;
// }
let fun: ReturnType<typeof f> // 直接传入f会报错，接收的是类型，而不是值


