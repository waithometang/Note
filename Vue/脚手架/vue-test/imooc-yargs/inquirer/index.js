// https://www.npmjs.com/package/inquirer
// import inquirer from "inquirer";
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

prompt({
  type: "input",
  name: "youName",
  message: "input your name",
  default: "twh",
  validate: function (v) {
    return typeof v === "string";
  },
  filter: function (f) {
    return "Name: " + f;
  },
  transformer: function (t) {
    return t + "(input your name?)";
  },
})
  .then((answer) => {
    console.log(answer);
  })
  .catch((error) => {
    console.log("error", error);
  });
