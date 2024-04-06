/**
 * isNaN：先尝试转换为数子，若无法转换为数字，则为true,否则fasle
 * Number.isNaN：直接检查一个值是否NaN
 */
// 1、NaN与任何值都不相等   2、NaN与任何值相加都是NaN
console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity
console.log(0 / 0); // NaN

console.log(NaN === NaN); // false
console.log(NaN === null); // false
console.log(NaN === undefined); // false

console.log(isNaN("123")); // false
console.log(isNaN(true)); // false
console.log(isNaN(123)); // false
console.log(isNaN("123F")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN("123S")); // false

// 面试题
console.log(isNaN("0yd")); //true
console.log(isNaN("0xd")); // false
console.log(Number.isNaN("0xd")); // false
console.log(Number.isNaN("0xd")); // false
