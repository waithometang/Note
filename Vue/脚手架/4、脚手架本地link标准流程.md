# 脚手架本地link标准流程

链接本地脚手架：

```javascript
cd your-cli-dir
npm link
```

链接本地库文件：

```javascript
cd your-lib-dir
npm link
cd your-cli-dir
npm link your-lib
```

取消链接本地库文件

```javascript
cd your-lib-link
npm unlink
cd your-cli-dir
# link存在
npm unlink your-lib
# link不存在
rm -rf node_modules
# 指向远程
npm install -S your-lib 
```

理解`npm link`:

- `npm link your-lib`:将当前项目中`node_modules`下指定的库文件链接到`node`全局`node_modules`下的库文件
- `npm link`:将当前项目链接到`node`全局`node_modules`中作为一个库文件，并解析`bin`配置创建可执行文件

理解`npm unlinik`

- `npm unlink`:将当前项目从`node`全局的`node_modules`中移除
- `npm unlink your-lib`:将当前项目中的库文件依赖移除
