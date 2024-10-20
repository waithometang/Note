#!/usr/bin/env node

const lib = require("imooc-test-cli-lib");
// console.log(lib);=
// console.log(lib.sum(1, 2)); // 3
// console.log("imooc-hyn-cli");

// 注册一个命令 imooc-hyn-cli init --name hynn-test
// 获取对应的参数
const argv = require("process").argv;
// 从第三个开始，前两个是node相关的
// console.log(argv);
// 命令
const command = argv[2];
// 选项,参数
const options = argv.slice(3);
if (options.length > 1) {
  let [option, param] = options;
  option = option.replace("--", "");
  if (command) {
    if (lib[command]) {
      lib[command]({ option, param });
    } else {
      console.log("无效的命令");
    }
  } else {
    console.log("请输入命令");
  }
}
// 实现参数解析 --version 和 init --name
if (command.startsWith("--") || command.startsWith("-")) {
  const globalOptions = command.replace(/--|-/g, "");
  if (globalOptions === "version" || globalOptions === "V") {
    console.log("版本号:1.0.0"); // 后续可直接读取package.json文件
  }
}
