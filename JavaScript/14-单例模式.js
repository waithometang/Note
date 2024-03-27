/**
 * 单例模式 确保一个类只有一个实例，并提供全局访问点。
 */
var Singleton = (function () {
  var instance;
  // 创建实例
  function createInstance() {
    // TODO
    return {};
  }
  return {
    // 使用闭包
    getInstance() {
      if (!instance) {
        instance = new createInstance();
      }
      return instance;
    },
  };
})();
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true

/**
 * ES6类
 */
class CSingleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
var cSingleton1 = new CSingleton();
var cSingleton2 = new CSingleton();
console.log(cSingleton1 === cSingleton2); // true
