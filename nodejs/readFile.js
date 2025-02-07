const fs = require('fs')
const log = console.log

fs.readFile('package.js', 'utf8', (err, data) => {
  if(err) {
    log(err)
    return
  }
  console.log(data)
})