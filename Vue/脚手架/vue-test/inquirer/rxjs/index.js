const { range, filter, map } = require("rxjs");

/**
 * 从1-200中筛选符合条件的数据
 */
range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));
