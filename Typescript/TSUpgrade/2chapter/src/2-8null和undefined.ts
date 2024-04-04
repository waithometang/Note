/**
 * 类型之间的赋值情况
 * https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
 */
// undefined可赋值情况
let u: any = undefined;
let u1: unknown = undefined;
let u2: void = undefined;
let u3: undefined = undefined;
// 以下两种strictNullChecks is off才可以
// let u4: null = undefined;
// let u5: object = undefined;

// null可赋值情况
let n: any = null;
let n1: unknown = null;
let n2: null = null;
// 以下三种strictNullChecks is off才可以
// let n3: object = null;
// let n4: void = null;
// let n5: undefined = null;
