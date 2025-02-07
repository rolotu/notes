// promise方法
const getFirstUserData = () => {
  return fetch('/users.json') // 获取用户列表
    .then(response => response.json())  //解析 json
    .then(users => users[0])  // 选择第一个用户
    .then(user => fetch(`/users/${user.name}`)) // 获取用户数据
    .then(userResponse => userResponse.json())  // 解析 json
}

// await/async
const getFirstUserDataAsync = async () => {
  const response = await fetch('/users.json')
  const users = await response.json()
  const user = users[0]
  const userResponse = await fetch(`/users/${user.name}`)
  const userData = await userResponse.json()
  return userData
}

// 多个异步函数串联
const promiseToDoSomeThing = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 10000)
  })
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomeThing()
  return something + ' 查看'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' 再次查看'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => console.log(res))