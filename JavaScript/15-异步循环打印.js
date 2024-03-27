/***
 * 异步循环打印
 */
/**
 * @description: 睡眠函数
 * @param {Number} arg
 * @param {Number} delay
 * @return {*}
 */
function sleep(arg, delay) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(arg);
    }, delay)
  );
}

const start = async function () {
  for (let i = 1; i < 5; i++) {
    const result = await sleep(i, i * 1000);
    console.log("result1", result);
  }
};

start();
