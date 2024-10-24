import cliSpinners from "cli-spinners";
import cliCursor from "cli-cursor";
import { BufferListStream } from "bl";
import readline from "readline";

const mutedStream = new BufferListStream();
mutedStream.pipe(process.stdout);
const rl = readline.createInterface({
  input: process.stdin,
  output: mutedStream,
});

const spinners = cliSpinners.dots; // 组件库
const text = "loading"; // 默认文本
const stream = process.stderr; // 输出流
let frameIndex = 0; // 当前帧
const frames = spinners.frames; // 每一帧内容
const interval = spinners.interval; // 每一帧间隔

function clear() {
  stream.cursorTo(0); // 将光标移到前面
  stream.clearLine(1); // 清除一行
}
// 渲染
function render() {
  clear();
  const renderText = frames[frameIndex] + " " + text;
  stream.write(renderText); // 渲染内容
  frameIndex = ++frameIndex % frames.length; // 获取下一帧内容
}
// 停止
function stop() {
  clearInterval(i);
  frameIndex = 0;
  clear();
  i = undefined;
  cliCursor.show(stream); // 还原光标
  rl.close();
}

cliCursor.hide(stream); // 隐藏光标

let i = setInterval(() => {
  render();
}, interval);

setTimeout(() => {
  stop();
}, 3000);
