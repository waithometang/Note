/**
 * 参数归一化 把不同情况转换成最终的一种情况
 */

function _formateNormalize(formatter) {
  if (typeof formatter === "function") {
    return formatter;
  }
  if (typeof formatter !== "string") {
    throw new TypeError("formatter must be a string");
  }
  if (formatter === "date") {
    formatter = "yyyy-MM-dd";
  } else if (formatter === "datetime") {
    formatter = "yyyy-MM-dd HH:mm:ss";
  }
  const formatterFunc = (datainfo) => {
    const { yyyy, MM, dd, HH, mm, ss, ms } = datainfo;
    return formatter
      .replaceAll("yyyy", yyyy)
      .replaceAll("MM", MM)
      .replaceAll("dd", dd)
      .replaceAll("HH", HH)
      .replaceAll("mm", mm)
      .replaceAll("ss", ss)
      .replaceAll("ms", ms);
  };
  return formatterFunc;
}

function formate(date, formatter, isPad = true) {
  formatter = _formateNormalize(formatter);
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  };
  dateInfo.yyyy = dateInfo.year.toString();
  dateInfo.MM = dateInfo.month.toString();
  dateInfo.dd = dateInfo.date.toString();
  dateInfo.HH = dateInfo.hour.toString();
  dateInfo.mm = dateInfo.minute.toString();
  dateInfo.ss = dateInfo.second.toString();
  dateInfo.ms = dateInfo.millisecond.toString();
  function _pad(prop, len) {
    dateInfo[prop] = dateInfo[prop].padStart(len, "0");
  }
  console.log(dateInfo);
  if (isPad) {
    _pad("yyyy", 4);
    _pad("MM", 2);
    _pad("dd", 2);
    _pad("HH", 2);
    _pad("mm", 2);
    _pad("ss", 2);
    _pad("ms", 3);
  }
  const result = formatter(dateInfo);
  console.log(result);
}
formate(new Date(), "date");
formate(new Date(), "datetime");
formate(new Date(), "date", true);
