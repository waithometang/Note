// extends
// 前面类型是个整体比较
type CondTyp = string extends string | number ? string | number : never; // number | string
type CondTyp1 = string | number extends string | number
  ? string | number
  : never; // number | string
type CondTyp2 = string | number | boolean extends string | number
  ? string | number
  : never; // never

// 泛型 逐个比较
type CondTypG<T> = T extends string | number ? string | number : never;
// 相当于
// string extends string | number
// number extends string | number
// boolean extends string | number

type CondTypGTest = CondTypG<string>; // string | number
type CondTypGTest1 = CondTypG<string | number>; // string | number
type CondTypGTest2 = CondTypG<string | number | boolean>; // string | number

export {};
