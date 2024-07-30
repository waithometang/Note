function UrlParams(params: any) {
  return function paramDecorator(
    targetClassProperty: any,
    methodname: string,
    paramindex: number
  ) {
    // 原型对象 { eat: [Function (anonymous)] }
    console.log("targetClassProperty", targetClassProperty);
    // 方法参数名 eat
    console.log("methodname", methodname);
    // 修饰的参数下标，从0开始
    console.log("paramindex", paramindex);
    targetClassProperty.info = params;
  };
}

class People {
  eat(@UrlParams("地址信息") address: string, who: string) {
    console.log("address", address);
  }
}


// 源码
"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    console.log("here");
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    console.log("c", c, "r", r);
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
function UrlParams(params) {
  return function paramDecorator(targetClassProperty, methodname, paramindex) {
    // 原型对象 { eat: [Function (anonymous)] }
    console.log("targetClassProperty", targetClassProperty);
    // 方法参数名 eat
    console.log("methodname", methodname);
    // 修饰的参数下标，从0开始
    console.log("paramindex", paramindex);
    targetClassProperty.info = params;
  };
}
console.log(__decorate);
var People = /** @class */ (function () {
  function People() {}
  People.prototype.eat = function (address, who) {
    console.log("address", address);
  };
  __decorate(
    [
      __param(0, UrlParams("地址信息")),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [String, String]),
      __metadata("design:returntype", void 0),
    ],
    People.prototype,
    "eat",
    null
  );
  return People;
})();

// console.log("this", this); // {}
// console.log("globalThis", global === globalThis); // true
// console.log("module", module.exports === this); // true
