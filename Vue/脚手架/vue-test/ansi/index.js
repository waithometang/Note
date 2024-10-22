// https://en.wikipedia.org/wiki/ANSI_escape_code
// 转义编码
// SGR 参数 30-37 选择前景色，而 40-47 选择背景
// \x1B 固定 固定 0m还原
console.log("\x1B[31m%s\x1B[0m", "your name"); // 字体颜色红色
console.log("\x1B[42m%s\x1B[0m", "your name"); // 背景色绿色
console.log("\x1B[4m%s\x1B[0m", "your name"); // 下划线
