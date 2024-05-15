// Awaited<Type>  async/promise.then 可以递归解包获取到类型
// type Awaited<T> = T extends null | undefined ? T : T extends object & {
//     then(onfulfilled: infer F, ...args: infer _): any;
// } ? F extends (value: infer V, ...args: infer _) => any ? Awaited<...> : never : T
type A = Awaited<Promise<any>> // any
type B = Awaited<Promise<string>> // string
type C = Awaited<Promise<Promise<number>>> // number
type D = Awaited<boolean | Promise<number>>; // number | boolean

// Partial<Type> 将对象属性转换为可选
interface Todo {
    id: number;
    description: string;
    completed: boolean;
}
function getPartial(todo: Todo, option: Partial<Todo>) {
    return { ...todo, ...option }
}
type P = Partial<Todo>
let todo: Todo = {
    id: 1,
    description: "数学",
    completed: false,
}
getPartial(todo, {})
getPartial(todo, {
    description: '语文'
})
