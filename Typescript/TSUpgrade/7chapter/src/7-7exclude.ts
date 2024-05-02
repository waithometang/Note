/**
 * Exclude<UnionType, ExcludedMembers>
 * 通过从 UnionType 中排除所有可分配给 ExcludedMembers 的联合成员来构造类型
 */
type ExcludeTest = Exclude<string, string | number>; // never
type ExcludeTest1 = Exclude<string | number, string | number>; // never
type ExcludeTest2 = Exclude<string | number | boolean, string | number>; //  boolean

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"

type T2 = Exclude<string | number | (() => void), Function>; // string | number

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
// {
//     kind: "square";
//     x: number;
// } | {
//     kind: "triangle";
//     x: number;
//     y: number;
// }
type T3 = Exclude<Shape, { kind: "circle" }>;

export {};
