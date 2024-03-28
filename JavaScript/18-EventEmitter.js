/**
 * 发布订阅模式
 */
/**
 * @description: 类方式创建
 * @return {*}
 */
class EventEmitter {
  constructor() {
    // 存储事件及其对应的回调函数
    this.event = {};
  }
  // 订阅事件
  on(type, handler) {
    if (!this.event[type]) {
      this.event[type] = [];
    }
    this.event[type].push(handler);
  }
  // 发布事件
  emit(type, ...args) {
    if (this.event[type]) {
      this.event[type].forEach((handler) => {
        handler.apply(this, args);
      });
    }
  }
  // 取消订阅事件
  off(type, handler) {
    if (!this.event[type]) return;
    if (!handler) {
      delete this.event[type];
    } else {
      this.event[type] = this.event[type].filter((cb) => cb !== handler);
    }
  }
  // 一次性订阅
  once(type, handler) {
    const onceHandler = (...args) => {
      handler.apply(this, args);
      this.off(type, onceHandler);
    };
    this.on(type, onceHandler);
  }
}
// 示例用法
const emitter = new EventEmitter();
// 订阅事件
const callback1 = (data) => console.log("Callback 1:", data);
emitter.on("event1", callback1);
// // 发布事件
emitter.emit("event1", "Hello");
// 取消订阅事件
emitter.off("event1", callback1);
// 再次发布事件，此时 callback1 已经被取消订阅，不会执行
emitter.emit("event1", "World");
// // 一次性订阅事件
emitter.once("event2", (data) => console.log("Callback 2:", data));
emitter.emit("event2", "Once");
// // 再次发布事件，此时 once 订阅的事件会被取消订阅
emitter.emit("event2", "Twice");

/**
 * @description: 发布订阅
 * @param {Object} all
 * @return {*}
 */
function mitt(all) {
  all = all || new Map();
  return {
    all,
    on(type, handler) {
      let handlers = all.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all.set(type, [handler]);
      }
    },
    off(type, handler) {
      let handlers = all.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        } else {
          all.set(type, []);
        }
      }
    },
    emit(type, evt) {
      let handlers = all.get(type);
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt);
        });
      }
      handlers = all.get("*");
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(type, evt);
        });
      }
    },
    once(type, handler) {
      const onceHandler = (evt) => {
        this.off(type, onceHandler);
        handler(evt);
      };
      this.on(type, onceHandler);
    },
  };
}

const mittEvent = mitt();
mittEvent.once("print", (data) => {
  console.log("print", data);
});
mittEvent.emit("print", "print data"); // 触发
mittEvent.emit("print", "print data2"); // 无效
