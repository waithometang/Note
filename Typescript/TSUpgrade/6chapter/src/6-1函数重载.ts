interface IMessage {
  id: number;
  type: MsgType;
  msg: string;
}
enum MsgType {
  Img = 1,
  Audio = 2,
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

function searchMsg(
  condition: number | MsgType
): IMessage | IMessage[] | undefined {
  if (typeof condition === "number") {
    return message.find((item) => item.id === condition);
  } else {
    return message.filter((item) => item.type === condition);
  }
}
// 由于返回联合类型，访问属性是公共的
(searchMsg(1) as IMessage).id;
searchMsg(MsgType.Audio) as IMessage[];
