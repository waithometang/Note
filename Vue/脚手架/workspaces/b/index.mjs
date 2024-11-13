import ora from "ora";

export default () => {
  const spinner = ora("Loading unicorns").start();

  spinner.color = "yellow";
  spinner.text = "Loading rainbows";

  setTimeout(() => {
    spinner.stop();
  }, 3000);
};
