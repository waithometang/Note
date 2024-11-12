# lerna

- 架构使用

![image-20241112230733385](C:\Users\tangweihong\AppData\Roaming\Typora\typora-user-images\image-20241112230733385.png)

# workspaces

- 项目创建 `npm init -y workspace`
- 查看帮助 `npm init -h`
- 创建其他项目：`npm init -w a -w b  //或者 --workspace`   顶级目录的`package.json`文件多了`workspaces:["a","b"]`
- 针对某一个包进行安装管理 `npm install chalk -w a` 只安装到`a`目录下，但是`node_modules`是在顶级目录下
- 创建一个`cli`项目，修改`name`,新建 `"bin": {"imooc-hyn-cli": "bin/cli.mjs"}`，然后安装`a`模块的包，`npm install @twhtestgroup/imooc-test-a -w cli`,最后可以直接使用`a`模块的方法。`imooc-hyn-cli`是线上已发布的脚手架命令

