// npm简介
// npm是nodejs标准的软件包管理器
// npm可以管理项目依赖的下载

// 安装所有依赖
// npm install

// 安装单个软件包
// npm install <package-name>
// · --save 安装并添加条目到package.json文件的dependencies
// · --save-dev 安装并添加条目到package.json文件的devDependencies
// 区别主要是，devDependencies 通常是开发的工具（例如测试的库），而 dependencies 则是与生产环境中的应用程序相关。

// 全局安装
// npm install -g <package-name>

// 卸载
// npm uninstall <package-name>

// 全局位置
// npm root -g

// 更新软件包
// npm update
// 也可指定单个软件包更新
// npm update <package-name>

// 查看已安装的npm软件包
// npm list

// 查看最新可用版本
// npm view

// 运行任务
// npm run <task-name>
/* 
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  },
}
*/
/* 
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
  },
}
npm run watch
npm run dev
npm run prod
*/

