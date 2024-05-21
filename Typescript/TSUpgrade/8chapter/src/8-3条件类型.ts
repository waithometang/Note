// Conditional Types 条件类型
// SomeType extends OtherType ? TrueType : FalseType;
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
// type Example1 = number
type Example1 = Dog extends Animal ? number : string;
// type Example2 = string
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
    id: number;
}
interface NameLabel {
    name: string;
}
type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}
// let a: NameLabel
let a = createLabel("typescript");
// let b: IdLabel
let b = createLabel(2.8);
// let c: IdLabel | NameLabel
let c = createLabel(Math.random() ? "hello" : 42);

// 泛型约束
type M<T extends {message: any}> = T["message"] 

// 条件类型中使用类型推断
// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;
// type Num = number
type Num = GetReturnType<() => number>;
// type Str = string
type Str = GetReturnType<(x: string) => string>;
// type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// 联合类型分配
type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;

// 不再是联合类型分配，通过使用[],将extends两侧括起来
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// type ArrOfStrOrNum = (string | number)[]
type ArrOfStrOrNum = ToArrayNonDist<string | number>;

export {}
