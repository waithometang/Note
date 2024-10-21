#!/usr/bin/env node

// https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md

const commander = require("commander");

const pkg = require("../package.json");

const { program } = commander;

program.version(pkg.version).parse(process.argv);
