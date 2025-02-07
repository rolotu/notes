const fs = require('fs')

fs.open('package.js', 'r', (err, fd) => {
  console.log(fd)
})

// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

fs.stat('package.js', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //可以访问 `stats` 中的文件属性
  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
  console.log(stats)
})

// 使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。
// 使用 stats.isSymbolicLink() 判断文件是否符号链接。
// 使用 stats.size 获取文件的大小（以字节为单位）。