#!/usr/bin/env node

// useage: https://www.npmjs.com/package/yargs
const process = require("process");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const arg = hideBin(process.argv);

/**
 * https://github.com/yargs/yargs/blob/main/docs/api.md
 * strict:启用严格模式,无效的命令会打印输出
 * usage:显示命令的使用方式
 * demandCommand:命令上下文的需求
 * alias:别名
 * wrap:格式化使用输出以在多列中换行
 * epilogue:在使用说明末尾打印的消息
 * options:自定义命令选项
 * option:和上面一样,参数不一样
 */
const cli = yargs(arg);

cli
  .usage("Usage:imooc-yargs [command] <options>")
  .demandCommand(1, "You need at least one command before moving on")
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(
    "for more information,https://github.com/yargs/yargs/blob/main/docs/api.md"
  )
  .options({
    run: {
      alias: "r",
      describe: "run your program",
      type: "boolean",
    },
    path: {
      alias: "p",
      describe: "provide a path to file",
      type: "string",
    },
  })
  .option("spec", {
    alias: "s",
    describe: "program specifications",
  })
  .group("run", "Run:")
  .strict()
  .locale("en").argv;

console.log("imooc yargs1", arg);
