/**
 * 深拷贝 对属性的复制
 * @param {*} obj
 * @param {*} map
 * @returns
 */
function deepClone(obj, map = new WeakMap()) {
  // 先判断是否对象
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 处理循环引用，如果存在，直接返回
  if (map.has(obj)) {
    return map.get(obj);
  }
  // 再判断是否是数组还是对象，因为数组也是对象
  const result = Array.isArray(obj) ? [] : {};
  // 将当前对象设置为已拷贝过的对象
  map.set(obj, result);
  // 递归复制对象的属性值
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}
let obj1 = {};
let obj2 = {
  b: obj1,
};
obj1.a = obj2;
// const a = { name: 1, info: { age: 13 } };
const b = deepClone(obj1);
const c = deepClone({ name: 123, age: 345 });
console.log(b, c);
