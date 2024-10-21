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
  .option("-e --envName <envName>", "get env name");

// 获取参数选项
// const options = program.opts();
// 输出帮助信息,相当于-h
// { debug: true, envName: 'xxx' }
// console.log(options);

// 注册命令：command
// 参数可为必选的（尖括号表示）、可选的（方括号表示）或变长参数（点号表示，如果使用，只能是最后一个参数）
const clone = program.command("clone <source> [destination]");
clone
  .description("clone a repository into a newly created directory")
  .option("-f --force", "是否强制克隆")
  .action((source, destination, cmdObj) => {
    console.log("clone command called", source, destination, cmdObj.force);
  });

// 注册子命令：addCommand
// imooc-yargs service start/stop
const service = new commander.Command("service");
service
  .command("start [port]")
  .description("start service")
  .action((port) => {
    console.log("start service at", port);
  });

service
  .command("stop")
  .description("stop service")
  .action(() => {
    console.log("stop service");
  });

program.addCommand(service);

// 这个需要放在最后，用来解析参数
program.parse(process.argv);
// program.outputHelp();
