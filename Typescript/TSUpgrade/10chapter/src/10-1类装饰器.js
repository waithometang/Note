// 不带参数类装饰器
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target =
      !descriptorIn && ctor
        ? contextIn["static"]
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            "Cannot add initializers after decoration has completed"
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === "accessor"
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context
      );
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name,
    });
  };
function ProductDecorator(targetClass) {
  // targetClass实际上就是类
  var target = new targetClass();
  target.buy(); // 购买iphone
}
var Product = (function () {
  var _classDecorators = [ProductDecorator];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var Product = (_classThis = /** @class */ (function () {
    function Product_1(name) {
      this.name = "iphone";
      this.name = name;
    }
    Product_1.prototype.buy = function () {
      console.log("购买" + this.name);
    };
    Product_1.prototype.price = function () {
      console.log(this.name + "价格是：9000");
    };
    return Product_1;
  })());
  __setFunctionName(_classThis, "Product");
  (function () {
    var _metadata =
      typeof Symbol === "function" && Symbol.metadata
        ? Object.create(null)
        : void 0;
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: "class", name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers
    );
    Product = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (Product = _classThis);
})();

// 旧版本源码

function ProductDecorator(targetClass) {
  var target = new targetClass();
  target.buy();
}

var __esDecorate =
  (this && this.__esDecorate) ||
  function (decorators, target, key, desc) {
    var argsNum = arguments.length;
    console.log(argsNum); // 2 只有两个参数
    /* arguments参数：
    2--装饰器修饰的是类或者构造函数参数，targetinfo=target类名
    4--装饰器修饰的是方法【第四个参数desc等于null】targetinfo=该方法的数据Object.getOwnPropertyDescriptor(target, key)
    3--装饰器修饰的是方法参数或者属性，targetinfo=undefined */
    var targetinfo =
      argsNum < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc;
    // 保存装饰器数组元素
    var decorator;
    if (
      typeof Reflect === "object" &&
      typeof Reflect.decorator === "function"
    ) {
      targetinfo = Reflect.decorator(decorators, target, key, desc);
    } else {
      // 装饰器循环，倒着来
      for (let i = decorators.length - 1; i >= 0; i--) {
        if ((decorator = decorators[i])) {
          targetinfo =
            (argsNum < 3
              ? decorator(target)
              : argsNum > 3
              ? decorator(target, key, targetinfo)
              : decorator(target, key)) || targetinfo;
          console.log("targetinfo:", targetinfo); // targetinfo: [Function: Product]
        }
      }
    }
    // 最终返回的是targetinfo
    return (
      argsNum > 3 &&
        targetinfo &&
        Object.defineProperty(target, key, targetinfo),
      targetinfo
    );
  };

var Product = /** @class */ (function () {
  function Product(name, age) {
    this.name = name;
    this.age = age;
  }
  Product.prototype.buy = function () {
    console.log("购买" + this.name);
  };
  Product.prototype.price = function () {
    console.log(this.name + "价格是：9000");
  };
  // 第一个参数是个数组，可有多个装饰器
  Product = __esDecorate([ProductDecorator], Product);
  console.log("Product", Product); // Product [Function: Product]
  return Product;
})();
