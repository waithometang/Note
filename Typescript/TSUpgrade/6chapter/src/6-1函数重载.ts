interface IMessage {
  id: number;
  type: MsgType;
  msg: string;
}
enum MsgType {
  Img = "Img",
  Audio = "Audio",
}

const message: IMessage[] = [
  {
    id: 1,
    type: MsgType.Img,
    msg: "first id 1",
  },
  {
    id: 2,
    type: MsgType.Audio,
    msg: "first id 2",
  },
  {
    id: 3,
    type: MsgType.Audio,
    msg: "first id 3",
  },
  {
    id: 4,
    type: MsgType.Img,
    msg: "first id 4",
  },
];
// 函数重载：一组具有多个相同名字，不同参数列表的和返回值无关并且具有一个实现签名和一个或多个重载签名的函数

function searchMsg(condition: MsgType): IMessage[];
function searchMsg(condition: number): IMessage | undefined;
function searchMsg(
  condition: number | MsgType
): IMessage | IMessage[] | undefined {
  if (typeof condition === "number") {
    return message.find((item) => item.id === condition);
  } else {
    return message.filter((item) => item.type === condition);
  }
}
// // 由于返回联合类型，访问属性是公共的
// (searchMsg(1) as IMessage).id;
// searchMsg(MsgType.Audio) as IMessage[];

console.log(searchMsg(1)?.msg);
searchMsg(MsgType.Audio).forEach((item) => {
  console.log(item.msg);
});
