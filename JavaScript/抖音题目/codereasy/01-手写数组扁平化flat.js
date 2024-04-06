/**
 * 数组扁平化
 */
// 通过在数组原型上自定义方法
// 扁平化
Array.prototype.customFlat = function () {
  let result = [];
  for (let item of this) {
    // this指向当前数组
    // 判断当前项是否是数组
    if (Array.isArray(item)) {
      // 递归调用
      result = result.concat(item.customFlat());
    } else {
      result.push(item);
    }
  }
  return result;
};
// 数组去重
Array.prototype.customUnique = function () {
  const result = [];
  const map = new Map();
  for (let item of this) {
    if (!map.has(item)) {
      result.push(item);
      map.set(item, item);
    }
  }
  return result;
};
// 零值相等？只有一个0
const arr = [0, -0, 1, 2, 3, 1, [5, 6, 7, [10, 11, 21, 22, 22]], 8, 9, 9];
// console.log(arr.customFlat());
// 对数组去重
// console.log(arr.customFlat().customUnique());
