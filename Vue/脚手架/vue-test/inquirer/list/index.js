const { EventEmitter } = require("events");
const MuteStream = require("mute-stream");
const readline = require("readline");
const { fromEvent } = require("rxjs");

const option = {
  type: "list",
  name: "name",
  message: "select your name:",
  choices: [
    {
      name: "zhangsan",
      value: "zs",
    },
    {
      name: "lisi",
      value: "ls",
    },
    {
      name: "wangwu",
      value: "ww",
    },
  ],
};

function Prompt(option) {
  return new Promise((resolve, reject) => {
    try {
      const list = new List(option);
      list.render();
    } catch (e) {
      reject(e);
    }
  });
}

class List extends EventEmitter {
  constructor(option) {
    super();
    this.name = option.name;
    this.message = option.message;
    this.choices = option.choices;
    this.input = process.stdin;
    const ms = new MuteStream();
    ms.pipe(process.stdout);
    this.output = ms;
    this.rl = readline.createInterface({
      input: this.input,
      output: this.output,
    });
    this.selected = 0;
    this.height = 0;
    this.keypress = fromEvent(this.rl.input, "keypress").forEach(
      this.onkeypress
    );
    this.hasSelected = false;
  }

  onkeypress = (keymap) => {};

  render() {
    this.output.unmute();
    this.clean();
    this.output.write(this.getContent());
    this.output.mute();
  }

  getContent = () => {
    if (!this.hasSelected) {
      let title = this.message + "(Use arrow keys)\n";
      this.choices.forEach((choice, index) => {
        if (index === this.selected) {
          if (index === this.choices.length - 1) {
            title += "> " + choice.name;
          } else {
            title += "> " + choice.name + "\n";
          }
        } else {
          if (index === this.choices.length - 1) {
            title += " " + choice.name;
          } else {
            title += " " + choice.name + "\n";
          }
        }
      });
      return title;
    } else {
    }
  };

  clean() {}
}

Prompt(option).then((answer) => {
  console.log("your name is:", answer);
});
