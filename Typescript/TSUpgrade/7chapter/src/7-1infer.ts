/**
 * infer关键字表示在extends条件语句中以占位符出现的等到使用时才推断出来的数据类型
 */

type Customer = { name: string; age: number };

type Tp = (params: Customer) => number;

type I1 = Tp extends (params: any) => infer R ? R : never; // number
type I2 = Tp extends (params: infer R) => any ? R : never; // {name: string;age: number;}

export {};
