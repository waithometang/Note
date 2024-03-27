/**
 * 使用never避免出现未来扩展新的类没有对应的类型的实现，目的就是写出类型绝对安全的代码
 */
type DataFlow = number | string;

function DataFlowAnalysisWithNever(dataFlow: DataFlow) {
  if (typeof dataFlow === "string") {
    console.log("字符串类型", dataFlow.includes("xxx"));
  } else if (typeof dataFlow === "number") {
    console.log("数字类型", dataFlow.toFixed(2));
  } else {
    let data = dataFlow; // never类型
  }
}
DataFlowAnalysisWithNever("字符串");
DataFlowAnalysisWithNever(2.12233);
