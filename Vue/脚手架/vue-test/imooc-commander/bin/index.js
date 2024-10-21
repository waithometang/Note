#!/usr/bin/env node

// https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md

const commander = require("commander");

const pkg = require("../package.json");
// 获取commander实例
const { program } = commander;

// 手动实例一个commander
// const program = new commander.Command();

program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option("-d --debug", "output extra debugging", true)
  .option("-e --envName <envName>", "get env name")
  .parse(process.argv);

// 获取参数选项
const options = program.opts();
// 输出帮助信息,相当于-h
program.outputHelp();
// { debug: true, envName: 'xxx' }
console.log(options);
