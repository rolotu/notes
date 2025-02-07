// TODO 从文件中公开功能

const car = {
  brand: 'Ford',
  model: 'Fiesta'
}

// 该文件只导出该对象
module.exports = car
// 另一个文件中
// const car = require('./car')

// 可以导出多个对象、函数或数据
exports.car = car
// 另一个文件中
// const items = require('./items')
// items.car

// module.exports公开了它指向的对象，export公开了它指向的对象的属性