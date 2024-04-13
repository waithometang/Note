var length = 1;
function fn() {
  console.log(this.length);
}

const arr = [fn, 1, 2];
arr[0](); // 3 this指向arr

const fn2 = arr[0];
fn2(); // 1 this指向全局window
