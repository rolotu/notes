// TODO 输出到命令行

const log = console.log

// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象
log('我的%s已经%d岁', '猫', 2)


// // 清空控制台
// console.clear()

// // 元素计数
console.count()

// // 计算耗时
const doSomething = () => log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

// 为输出着色
log('\x1b[33m%s\x1b[0m', '你好')
const chalk = require('chalk')
log(chalk.yellow('你好'))


// 创建进度条
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })

const timer = setInterval(() => {
  bar.tick()
  if(bar.complete) {
    clearInterval(timer)
  }
}, 100)