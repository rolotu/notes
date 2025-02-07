const fs = require('fs')
const path = require('path')
const log = console.log
const error = console.error

const folderName = 'users/test'

// 检查文件夹是否存在
fs.access(folderName, (err) => {
  log(err)
})

// 创建新的文件夹
// 使用 fs.mkdir() 或 fs.mkdirSync() 可以创建新的文件夹。
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  error(err)
}

// 读取目录的内容
const getFolderContent = folderPath => {
  return fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
  })
}
// 仅返回文件
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}
log(getFolderContent(folderName))
log(getFolderContent(folderName).filter(isFile))

// 重命名文件夹
fs.rename('users/data', 'users/name', err => {
  if(err) {
    error(err)
    return
  }
  // 完成
})

// 删除文件
// 使用 fs.rmdir() 或 fs.rmdirSync() 可以删除文件夹。