/**
 * infer关键字表示在extends条件语句中以占位符出现的等到使用时才推断出来的数据类型
 */

type Customer = { name: string; age: number };

type Tp = (params: Customer) => number;

type I1 = Tp extends (params: any) => infer R ? R : never; // number
type I2 = Tp extends (params: infer R) => any ? R : never; // {name: string;age: number;}

class Subject {
  constructor(public subid: number, public subname: string) {}
}
let chinese = new Subject(100, "语文");
let math = new Subject(90, "数学");
let english = new Subject(80, "英语");

let chineseMath = new Set([chinese, math]);

type ElementType<T> = T extends (infer U)[] ? U : never;
type SetSubject = ElementType<typeof chineseMath>[];

let S = typeof chineseMath;
export {};
