/**
 * new.target
 */
function A() {
  if (new.target) {
    console.log("构造函数");
  } else {
    console.log("普通函数");
  }
}

A(); // 普通函数
new A(); // 构造函数
