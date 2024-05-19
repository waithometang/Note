export type IncreaseBoolean = Boolean | 0 | 1;

export function mounted(isStartup: IncreaseBoolean) {
  if (isStartup) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
mounted(1);
export {};
