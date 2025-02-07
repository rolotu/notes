/* 
队列（Queue）是一种运算受限的线性表，特点：先进先出。(FIFO：First In First Out)

只允许在表的前端（front）进行删除操作。
只允许在表的后端（rear）进行插入操作。

生活中类似队列结构的场景：
排队，比如在电影院，商场，甚至是厕所排队。
优先排队的人，优先处理。 (买票、结账、WC)。
*/

class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.join(' ')
  }
}

const log = console.log

function passGame(nameList, number) {
  const queue = new Queue()

  for (const name of nameList) {
    queue.enqueue(name)
  }

  while (queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    
    queue.dequeue()
    log(queue.items)
  }

  const endName = queue.front()

  return nameList.indexOf(endName)
}

const names = ["lily", "lucy", "tom", "tony", "jack"]
const targetIndex = passGame(names, 6)
console.log("击鼓传花", names[targetIndex])