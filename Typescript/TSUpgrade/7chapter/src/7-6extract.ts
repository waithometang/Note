/**
 * Extract<Type, Union>
 * 通过从 Type 中提取可分配给 Union 的所有联合成员来构造类型
 */

type ExtractTest = Extract<string, string | number>; // string
type ExtractTest1 = Extract<string | number, string | number>; // string | number
type ExtractTest2 = Extract<string | number | boolean, string | number>; //  string | number

type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
// {
//   kind: "circle";
//   radius: number;
// }
type T2 = Extract<Shape, { kind: "circle" }>;

type O1 = { kind: "circle" };
type O2 = { kind: "circle"; radius: number };

let O3: O2 = { kind: "circle", radius: 1 };
let O4: O1 = O3;

export {};
