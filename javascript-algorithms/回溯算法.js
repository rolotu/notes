let result = []
function backtrack(路径, 选择列表) {
  if ('满足条件') {
    result.push(路径)
    return
  } else {
    for (let i = 0; i < 选择列表.length; i++) {
      // 对一个选择列表做相应的选择

      做选择

      backtrack(路径, 选择列表)

      // 既然是回溯算法,那么在一次分岔路做完选择后
      // 需要回退我们之前做的操作

      撤销选择
    }
  }
}