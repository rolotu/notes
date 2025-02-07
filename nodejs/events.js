// 事件触发器
const Events = require('events')
const events = new Events()

// 公开了 on 和 emit 方法
// emit 用于触发事件
// on 用于添加回调
events.on('start', (start, end) => {
  console.log(`从 ${start} 到 ${end}`)
})
events.emit('start', 24, 100)

// EventEmitter 对象还公开了其他几个与事件进行交互的方法，例如：
// once(): 添加单次监听器。
// removeListener() / off(): 从事件中移除事件监听器。
// removeAllListeners(): 移除事件的所有监听器。
// 可以在事件模块的页面 http://nodejs.cn/api/events.html 上阅读其所有详细信息。