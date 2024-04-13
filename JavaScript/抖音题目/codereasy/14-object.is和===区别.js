/**
 * 相等比较==
 *  1、如果两个操作数类型相同，执行严格相等
 *  2、如果两个操作数类型不同，则进行类型转换后再进行比较。
 *      1、如果一个操作数是number，另一个是string，则将字符串转换成number再比较
 *      2、如果一个操作数是boolean，则将boolean转换为number再比较
 *      3、如果一个操作数是对象，另一个操作数是number或string，则将对象转换为原始值（先调用valueof，后调用tostring），再进行比较
 *
 *
 * object.is
 *  当比较NaN时，object.is(NaN,NaN)返回true
 *  当比较+0和-0时，object.is(+0,-0)返回false 区分正负
 *
 * ===
 *  当比较NaN时，NaN===NaN返回false
 *  当比较+0和-0时，+0===-0返回true 不区分正负
 */

console.log(true == 1); // true
console.log(true == 0); // false
console.log("1" == 1); // true
console.log(undefined == null); // true

console.log(NaN === "1"); // false
console.log(NaN === NaN); // false
console.log(+0 === -0); // true

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
