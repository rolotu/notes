const express = require('express')

const log = console.log
const app = express()

app.get('/', (req, res) => {
  res.send('hello world!')
})

const server = app.listen(3000, () => {
  log('我的%s已经%d岁', '猫', 2)
})

process.on('SIGTERM', () => {
  server.close(() => {
    server.close(() => {
      console.log('process is end')
    })
  })
})