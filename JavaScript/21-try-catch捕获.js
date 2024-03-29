// trycatch 不能捕获运行时异常_面试官：用一句话描述 JS 异常是否能被 try catch 捕获到
// 能捕捉到的异常必须是线程执行已经进入 try catch 但 try catch 未执行完的时候抛出来的。

// // 1、语法错误不能捕获
// try {
//   //   e; // e is not defined
// } catch (error) {
//   console.log(error);
// }
// // 2、语法正确，线程进入try catch中时，可以捕获
// function test() {
//   console.log(a.b);
// }
// try {
//   test();
// } catch (error) {
//   console.log("语法正确", error); // a is not defined
// }
// // 3、异步无法捕获
// try {
//   setTimeout(() => {
//     console.log(a.b);
//   }, 1000);
// } catch (error) {
//   console.log("异步", error);
// }
// 4、Promise异常无法捕获
try {
  // 只能被只身catch捕获
  new Promise((resolve, reject) => {
    throw Error("promise错误");
  }).catch((e) => {
    console.log("catch", e.message);
  });
} catch (error) {
  console.log("Promise", error);
}
