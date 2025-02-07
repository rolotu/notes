let openRequest = indexedDB.open('store', 1)

openRequest.onupgradeneeded = function () {
  // 如果客户端没有数据库则触发
  // ...执行初始化...
}


openRequest.onerror = function () {
  console.error("Error", openRequest.error)
}


openRequest.onsuccess = function () {
  let db = openRequest.result
  // 继续使用 db 对象处理数据库
}

let deleteRequest = indexedDB.deleteDatabase('store')