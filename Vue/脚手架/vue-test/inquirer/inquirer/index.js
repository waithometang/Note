// https://www.npmjs.com/package/inquirer
// import inquirer from "inquirer";
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

prompt([
  // {
  //   type: "input",
  //   name: "youName",
  //   message: "input your name",
  //   default: "twh",
  //   validate: function (v) {
  //     return typeof v === "string";
  //   },
  //   filter: function (f) {
  //     return "Name: " + f;
  //   },
  //   transformer: function (t) {
  //     return t + "(input your name?)";
  //   },
  // },
  // {
  //   type: "number",
  //   name: "number",
  //   message: "input number",
  // },
  // {
  //   type: "confirm",
  //   name: "select",
  //   message: "yes/no",
  //   default: false,
  // },
  {
    type: "list",
    name: "choice",
    message: "choices",
    default: 2,
    choices: [
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
    ],
  },
  // {
  //   type: "rawlist",
  //   name: "choice",
  //   message: "choices",
  //   default: 2,
  //   choices: [
  //     { name: "1", value: 1 },
  //     { name: "2", value: 2 },
  //     { name: "3", value: 3 },
  //   ],
  // },
  // {
  //   type: "expand",
  //   name: "choice",
  //   message: "choices",
  //   default: "r",
  //   choices: [
  //     { key: "r", value: 10 },
  //     { key: "g", value: 20 },
  //     { key: "b", value: 30 },
  //   ],
  // },
  // {
  //   type: "checkbox",
  //   name: "choice",
  //   message: "choices",
  //   // default: [20, 30],
  //   choices: [
  //     { key: "r", value: 10, disabled: true },
  //     { key: "g", value: 20, checked: true },
  //     { key: "b", value: 30 },
  //   ],
  // },
  // {
  //   type: "password",
  //   name: "password",
  //   message: "input password",
  //   mask: "*",
  // },
  // {
  //   type: "editor",
  //   name: "editor",
  //   message: "input content:",
  // },
])
  .then((answer) => {
    console.log(answer);
  })
  .catch((error) => {
    console.log("error", error);
  });
