// https://www.npmjs.com/package/ora

import ora, { oraPromise } from "ora";

// ora可传参数，string或者object
// string-相当于spinner.text = "xxx"
// object-和下面的属性一样
const spinner = ora().start();

// 通过实例调用
spinner.text = "Loading...";

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
}, 1000);

setTimeout(() => {
  spinner.succeed("success");
  spinner.fail("fail");
  //   spinner.stop();
}, 2000);

// Starts a spinner for a promise or promise-returning function. The spinner is stopped with .succeed() if the promise fulfills or with .fail() if it rejects. Returns the promise.

/**
 * oraPromise(action, text)
   oraPromise(action, options)
 */
(async function () {
  function promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
  await oraPromise(promise);
})();
