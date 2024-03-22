/**
 * 以下输出是什么 
 * 1、考察map 创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
 *  1.1：element 数组中当前正在处理的元素。
    1.2：index 正在处理的元素在数组中的索引。
    1.3：array 调用了 map() 的数组本身。

 * 2、考察parseInt(string, radix) 解析一个字符串参数并返回一个指定基数的整数
    2.1：要被解析的值，会被强制转化为字符串。字符串开头的空白符将会被忽略。
    2.2：如果 radix 小于 2 或大于 36，或第一个非空白字符不能转换为数字，则返回 NaN。
    2.3：如果 radix 为 undefined 或 0，则 radix 将被默认设置为 10，除非该数字以码元对 0x 或 0X 开头，在这种情况下，radix 将被默认设置为 16。
 */
const res = [1, 2, 3].map(parseInt);
console.log(res); // [ 1, NaN, NaN ]
/**
 * 1、parseInt(1,0) 十进制 =>1
 * 2、parseInt(2,1) 一进制，没有2，=>NaN
 * 3、parseInt(3,2) 二进制，没有3，=>NaN
 */
// 变种题
console.log(parseInt(1 / 0, 19)); // 18 [1/0是Infinity,将其转成字符串，并按19进制解析，由于I是18，n是超过这范围，停止解析并返回之前的结果，所以是18]
console.log(parseInt(false, 16)); // 250 [false转为字符串,按16进制解析：15*16^1+10*16^0]
console.log(parseInt(parseInt, 16)); // 15 [parseInt转成字符串是ƒ parseInt() { [native code] }，16进制中f是15]
console.log(parseInt({}, 16)); // NaN [{}转成字符串是[object Object]，不是有效的16进制]
