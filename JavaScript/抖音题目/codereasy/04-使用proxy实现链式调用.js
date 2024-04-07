/**
 * proxy链式调用
 * globalThis可以挂载到任何环境的全局对象中
 */
globalThis.add = function (a) {
  return a + 1;
};
globalThis.sub = function (b) {
  return b - 2;
};
globalThis.mul = function (c) {
  return c * 3;
};
// 实现方式
function chain(value) {
  const handler = {
    get: function (target, propKey) {
      // 如果是end，直接返回结果
      if (propKey === "end") {
        return target.value;
      }
      // 如果是函数，则调用
      if (typeof globalThis[propKey] === "function") {
        target.value = globalThis[propKey](target.value);
        return proxy;
      }
      return target[propKey];
    },
  };
  const proxy = new Proxy({ value }, handler);
  return proxy;
}

// 实现链式调用，并且返回结果
const result = chain(10).add.sub.mul.end;
console.log(result); // 27
