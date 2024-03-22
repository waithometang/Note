/**
 * 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次， 如果在 n 秒内又触发了事件，则会重新计算函数执行时间
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
function debounce(fn, wait) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
/**
 * 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
function throttle(fn, wait) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}
