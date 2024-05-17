// Awaited<Type>  async/promise.then 可以递归解包获取到类型
// type Awaited<T> = T extends null | undefined ? T : T extends object & {
//     then(onfulfilled: infer F, ...args: infer _): any;
// } ? F extends (value: infer V, ...args: infer _) => any ? Awaited<...> : never : T
type A = Awaited<Promise<any>> // any
type B = Awaited<Promise<string>> // string
type C = Awaited<Promise<Promise<number>>> // number
type D = Awaited<boolean | Promise<number>>; // number | boolean

// Partial<Type> 将对象属性转换为可选 type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
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

// Required<Type> 将对象属性转换为必选 type Required<T> = { [P in keyof T]-?: T[P]; }
// type R = {
//     a: string;
//     b: string;
// }
interface Props {
    a?: string;
    b: string;
}
type R = Required<Props>

// Readonly<Type> 将对象属性转换为只读 type Readonly<T> = { readonly [P in keyof T]: T[P]; }
type R1 = Readonly<Props>
let r1:R1 = { b: "hello };
// r1.b = "world"; Cannot assign to 'b' because it is a read-only property.

// Record<Keys, Type> 构造一个对象类型，其属性键为 Keys，属性值为 Type type Record<K extends string | number | symbol, T> = { [P in K]: T; }
// type Rec = {
//     miffy: CatInfo;
//     boris: CatInfo;
//     mordred: CatInfo;
// }
interface CatInfo {
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
type Rec = Record<CatName, CatInfo>

// Pick<Type, Keys> 通过从 Type 中选取属性 Keys来构造类型 type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// type P = {
//     age: number;
// }
type P = Pick<CatInfo, "age">

// Omit<Type, Keys> 通过从 Type 中选取所有属性，然后删除 Key来构造类型 type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
// type O = {
//     age: number;
// }
type O = Omit<CatInfo, "breed">

// Exclude<UnionType, ExcludedMembers> 通过从 UnionType 中排除所有可分配给 ExcludedMembers 的联合成员来构造类型 type Exclude<T, U> = T extends U ? never : T
// type E = "b" | "c"
type E = Exclude<"a" | "b" | "c", "a">;

// Extract<Type, Union> 通过从 Type 中提取可分配给 Union 的所有联合成员来构造类型 type Extract<T, U> = T extends U ? T : never
// type E1 = "b" | "a"
type E1 = Extract<"a" | "b", "a" | "b" | "c">

// NonNullable<Type> 通过从 Type 中排除 null 和 undefined 来构造类型 type NonNullable<T> = T & {}
// type N = "b" | "a"
type N = NonNullable<"a" | undefined | null | "b">

// Parameters<Type> 根据函数类型 Type 的参数中使用的类型构造元组类型 type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
declare function f1(arg: { a: number; b: string }): void;
// type P = []
type P = Parameters<() => void>
// type P1 = [name: string]
type P1 = Parameters<(name: string) => void>
// type P2 = [name: string, age: number]
type P2 = Parameters<(name: string, age: number) => void>
// type P3 = [arg: unknown]
type P3 = Parameters<<T>(arg:T) => T>
// type P4 = [arg: {
//     a: number;
//     b: string;
// }]
type P4 = Parameters<typeof f1>

// ConstructorParameters<Type> 从构造函数类型的类型构造元组或数组类型。它生成一个包含所有参数类型的元组类型（如果 Type 不是函数，则永远不会生成该类型） type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never
class Person {
    constructor(name:string,age:number) {}
}
// type C = [name: string, age: number]
type C = ConstructorParameters<typeof Person>
// type C1 = [message?: string | undefined]
type C1 = ConstructorParameters<ErrorConstructor>
// type C2 = [pattern: string | RegExp, flags?: string | undefined]
type C2 = ConstructorParameters<RegExpConstructor>
// type C3 = string[]
type C3 = ConstructorParameters<FunctionConstructor>
// type C4 = unknown[]
type C4 = ConstructorParameters<any>

// ReturnType<Type> 构造一个由函数 Type 的返回类型组成的类型 type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
// type R = string
type R = ReturnType<() => string>
// type R1 = void
type R1 = ReturnType<() => void>
// type R2 = unknown
type R2 = ReturnType<<T>() => T>
// type R3 = string[]
type R3 = ReturnType<<T extends U, U extends string[]>() => T>;
declare function f1(): { a: number; b: string };
// type R4 = {
//     a: number;
//     b: string;
// }
type R4 = ReturnType<typeof f1>;

// InstanceType<Type> 构造一个由 Type 中构造函数的实例类型组成的类型 type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
class CC {
    a!: string;
    b!: number;
}
// type C = CC
type C = InstanceType<typeof CC>
// type C1 = any
type C1 = InstanceType<any>;
// type C2 = never
type C2 = InstanceType<never>;

// NoInfer<Type> 阻止对所包含类型的推断。除了阻止推理之外，NoInfer<Type> 与 Type 相同 type NoInfer<T> = intrinsic
function createStreetLight<C extends string>(
    colors: C[],
    defaultColor?: NoInfer<C>,
) {
    // ...
}
// function createStreetLight<"red" | "yellow" | "green" > (colors: ("red" | "yellow" | "green")[], defaultColor ?: "red" | "yellow" | "green" | undefined): void
createStreetLight(["red", "yellow", "green"], "blue"); // Error
createStreetLight(["red", "yellow", "green"], "red"); // OK

// ThisParameterType<Type> 提取函数类型的 this 参数的类型，如果函数类型没有 this 参数，则为未知 type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown
function toHex(this: Number) {
    return this.toString(16);
}
// type F = (this: Number) => string
type F = typeof toHex
function NumberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n)
}

// OmitThisParameter<Type> 从 Type 中删除 this 参数。如果 Type 没有显式声明此参数，则结果只是 Type。否则，将从 Type 创建一个不带 this 参数的新函数类型。泛型被删除，只有最后一个重载签名被传播到新的函数类型中 
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T
// const fiveToHex: () => string
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

// ThisType<Type> 此实用程序不返回转换后的类型。相反，它充当上下文 this 类型的标记。请注意，必须启用 noImplicitThis 标志才能使用此实用程序。 interface ThisType<T>
type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

// 固有字符串操作类型
Uppercase<StringType> // 转大写
Lowercase<StringType> // 转小写
Capitalize<StringType> // 首字母大写
Uncapitalize<StringType> // 首字母小写












