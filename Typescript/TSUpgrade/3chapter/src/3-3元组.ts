/**
 * 元组-tuple
 * 1、在定义时每个元素的类型都确定
 * 2、元素值的数据类型必须是当前元素定义的类型
 * 3、元素的个数必须和定义时个数相同
 */

let hero: [string, number, number] = ["zhangsan", 20, 100];

// 可变元组 类似于剩余参数
let arr: [string, number, ...any] = ["zhangsan", 12, true, "jjj"];
// 解构
const [name, age, ...other] = arr;
console.log(arr[0], arr[1]);
// tag标签，自定义字段含义
const [_name, _age]: [name_: string, age_: number] = ["zs", 20];
console.log(_name, _age);

// 数组只读和数组元素只读
// const account1 = [1, 2, 3];
// account1 = [2, 3]; // 无法分配到 "account1" ，因为它是常数

// const account1 = [1, 2, 3] as const;
// account1 = [2, 3, 4];
// account1[1] = 100; 无法为“1”赋值，因为它是只读属性

// const account: ReadonlyArray<number> = [1, 2, 3, 4];
// account = [2, 3, 4, 5];
// account[1] = 2; // ReadonlyArray是对元素内容只读，索引可以改变
const account: readonly number[] = [1, 2, 3];
export {};
