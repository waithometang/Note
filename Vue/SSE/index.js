const http = require("http");
// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头，表明这是一个 SSE 服务器
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
  });

  // 发送初始化消息
  res.write("data: Connected\n\n");
  let id = 0;
  // 每秒向客户端发送一条消息
  const intervalId = setInterval(() => {
    const message = `data: Time: ${new Date().toLocaleTimeString()}\ndata: id: ${++id}\n\n`;
    res.write(message);
  }, 1000);

  // 监听连接关闭事件，停止发送消息
  req.on("close", () => {
    clearInterval(intervalId);
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 3000;

// 监听指定端口
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
