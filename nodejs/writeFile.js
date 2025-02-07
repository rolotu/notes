const fs = require('fs')

const content = `一些内容\n`
// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

fs.writeFile('test.txt', content, { flag: 'w+' }, err => {
  if (err) {
    console.log(err)
    return
  }
  // 写入成功
})

// 追加到文件
fs.appendFile('test.txt', content, err => {
  if (err) {
    console.err(err)
    return
  }
  // 完成
})