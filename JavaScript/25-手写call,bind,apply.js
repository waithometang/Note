/**
 * 1.判断当前this是否为函数，防止Function.prototype.myCall() 直接调用
   2.context 为可选参数，如果不传的话默认上下文为 window
   3.为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性
   4.处理参数，传入第一个参数后的其余参数
   5.调用函数后即删除该Symbol属性
 * @param {*} context  在调用 func 时要使用的 this 值。如果函数不在严格模式下，null 和 undefined 将被替换为全局对象，并且原始值将被转换为对象。
 * @param  {...any} args 函数的参数。
 * @returns  使用指定的 this 值和参数调用函数后的结果。
 */
Function.prototype.myCall = function (context, ...args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.myCall() 直接调用
  }
  context = context || window;
  const symbol = Symbol();
  context[symbol] = this;
  const result = context[symbol](...args);
  delete context[symbol];
  return result;
};

/**
 * @description: apply实现类似call，参数为数组
 * @param {*} context
 * @param {*} args 一个类数组对象，用于指定调用 func 时的参数，或者如果不需要向函数提供参数，则为 null 或 undefined。
 * @return {*}
 */
Function.prototype.myApply = function (context, args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.myCall() 直接调用
  }
  // 判断是否为数组
  if (!Array.isArray(args)) {
    throw TypeError("参数错误，应为数组");
  }
  context = context || window;
  const symbol = Symbol();
  context[symbol] = this;
  const result = context[symbol](args);
  delete context[symbol];
  return result;
};

/**
 * @description: bind() 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 this 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。
 * @param {*} context
 * @param {array} args
 * @return {*}
 */
Function.prototype.myBind = function (context, ...args) {
  if (this === Function.prototype) {
    return undefined;
  }
  // 返回一个函数，形成闭包
  const self = this;
  return function (...args2) {
    return self.myCall(context, ...args2, ...args);
  };
  // 另外一种方式
  //   return function F(...args2) {
  //     if (self instanceof F) {
  //       return new self(...args1, ...args2);
  //     } else {
  //       return self.myCall(context, args.concat(args2));
  //     }
  //   };
};

// 链式调用
const r = console.log.call.call.call.call.apply((a) => a, [1, 2]);
console.log(r); // 2
// Function.prototype.call.apply((a) => a, [1, 2]);
// ((a) => a).call(1, 2);
