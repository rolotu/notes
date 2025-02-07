const path = require('path')
const log = console.log

// dirname: 获取文件的父文件夹。
// basename: 获取文件名部分。
// extname: 获取文件的扩展名。
const notes = '/users/joe/notes.txt'

log(
  path.dirname(notes),
  path.basename(notes),
  path.extname(notes)
)

// 可以使用 path.join() 连接路径的两个或多个片段：
log(
  path.join('/', 'users', 'joe', 'notes.txt')
)

// 可以使用 path.resolve() 获得相对路径的绝对路径计算：
log(
  path.resolve('package.js')
)

log(
  path.resolve('tmp', 'joe.txt')
)

log(
  path.normalize('/users/joe/..//test.txt')
)