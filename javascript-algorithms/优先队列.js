/* 
生活中类似优先队列的场景：
优先排队的人，优先处理。 (买票、结账、WC)。
排队中，有紧急情况（特殊情况）的人可优先处理。

优先级队列主要考虑的问题：
每个元素不再只是一个数据，还包含优先级。
在添加元素过程中，根据优先级放入到正确位置。
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

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super()
  }
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false

      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  toString() {
    let result = ""
    for (let item of this.items) {
      result += item.element + "-" + item.priority + " "
    }
    return result
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 15);
priorityQueue.enqueue("C", 11);
priorityQueue.enqueue("D", 20);
priorityQueue.enqueue("E", 18);
console.log(priorityQueue.items);