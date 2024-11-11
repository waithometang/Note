/**
 * 命令行实现步骤
 * constructor 
     EventEmitter -> MuteStream实例化 -> 获取输入输出流 -> readline实例化 -> 键盘监听 -> 参数解析
    
    render
     output.unmute -> 清屏 -> 生成内容 -> 打印内容 -> output.mute
    
    keypress
     up/down -> 更新selected
     enter -> close -> set hasselected true -> render -> emit exit
 */

const { EventEmitter } = require("events");
const MuteStream = require("mute-stream");
const readline = require("readline");
const { fromEvent } = require("rxjs");
const ansiEscapes = require("ansi-escapes");

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
      list.on("emit", function (answer) {
        resolve(answer);
      });
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

  onkeypress = (keymap) => {
    const key = keymap[1];
    if (key.name === "down") {
      this.selected++;
      if (this.selected > this.choices.length - 1) {
        this.selected = 0;
      }
      this.render();
    } else if (key.name === "up") {
      this.selected--;
      if (this.selected < 0) {
        this.selected = this.choices.length - 1;
      }
      this.render();
    } else if (key.name === "return") {
      this.hasSelected = true;
      this.render();
      this.close();
      this.emit("exit", this.choices[this.selected]);
    }
  };

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
      this.height = this.choices.length + 1;
      return title;
    } else {
      const name = this.choices[this.selected].name;
      let title = this.message + " " + name;
      return title;
    }
  };

  clean() {
    const emptyLines = ansiEscapes.eraseLines(this.height);
    this.output.write(emptyLines);
  }

  close() {
    this.output.unmute();
    this.rl.output.end();
    this.rl.pause();
    this.rl.close();
  }
}

Prompt(option).then((answer) => {
  console.log("your name is:", answer);
});
