/* 
栈（stack）是一种运算受限的线性表：
  LIFO（last in first out）表示就是后进入的元素，第一个弹出栈空间。类似于自动餐托盘，最后放上的托盘，往往先把拿出去使用。
  其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。
  向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；
  从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。 

栈的特点：先进后出，后进先出。
*/

// 栈结构封装
class Stack {
  constructor() {
    this.items = []
  }
  // push(item) 压栈操作，往栈里面添加元素
  push(item) {
    return this.items.push(item)
  }
  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop() {
    return this.items.pop()
  }
  // peek() 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // isEmpty() 判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // size() 获取栈中元素个数
  size() {
    return this.items.length
  }
  // toString() 返回以字符串形式的栈内元素数据
  toString() {
    return this.items.join(' ')
  }
}

const log = console.log
const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
log(stack)

log(stack.pop())
log(stack.peek())
log(stack.isEmpty())
log(stack.size())
log(stack.toString())

// 利用栈结构的特点封装实现十进制转换为二进制的方法。
function dec2bin(dec) {
  const stack = new Stack()

  while (dec > 0) {
    stack.push(dec % 2)
    dec = Math.floor(dec / 2)
  }
  log(stack.items)
  let binaryString = ''

  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString
}

log(dec2bin(100))
log(dec2bin(88))