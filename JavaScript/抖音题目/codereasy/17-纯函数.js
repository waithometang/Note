/**
 * 纯函数：
 * 1、确定性：对于相同的输入，纯函数总是产生相同的输出
 * 2、无副作用：纯函数不会修改其外部环境，报矿全局变量、输入参数对象等
 */
// 纯函数，
function add(x, y) {
  return x + y;
}
// 非纯函数
let global = 1;
function sub(x, y) {
  global += 1;
  return x - y + global;
}

[1, 3, 2, 4].sort();
// 纯函数，返回新的数组，不修改原数组
// toSorted toSpliced with toReversed
