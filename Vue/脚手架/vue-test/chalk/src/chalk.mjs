// https://www.npmjs.com/package/chalk
import chalk, { Chalk } from "chalk";

const log = console.log;
// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));
// Compose multiple styles using the chainable API
log(chalk.white.bgRed.bold("Hello world!"));
// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
// Nest styles
log(chalk.red("Hello", chalk.underline("world") + "!"));
// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

// 自定义颜色
const error = (...text) => chalk.bold.hex("#ff0000")(text);
const warning = (...text) => chalk.bold.hex("#ffa500")(text);

log(error("hello world"));
log(warning("hello chalk"));

// 模版字符串
const name = "Sindre";
log(chalk.green("Hello %s"), name);

// 颜色支持
/**
 * Level   Description
    0	    All colors disabled
    1	    Basic color support (16 colors)
    2	    256 color support
    3	    Truecolor support (16 million colors)
 */
const customChalk = new Chalk({ level: 3 });
log(customChalk.hex("#ff00ff")("customChalk"));
