总结
Map – 是一个键值集合.

方法和属性如下:

new Map([iterable]) – 创建空的 map, 可选的带有 [key,value] 对的iterable (例如数组) 对象来进行初始化 。
map.set(key, value) – 存储对应的键值。
map.get(key) – 根据键来返回值, 如果键不存在 map 里就返回 undefined。
map.has(key) – 如果 key 存在则返回 true , 否则返回false。
map.delete(key) – 删除指定键值。
map.clear() – 清空 map 。
map.size – 返回当前全部元素的数量。
跟普通对象 Object 最大的不同点是:

任何键，对象都可以被用作它的键，
有额外的方法, 和 size 属性。
Set – 是一个独一无二的值的集合.

方法和属性:

new Set([iterable]) – 创建空的 set , 可选的带有 iterable (例如数组) 对象来进行初始化。
set.add(value) – 添加一个 value（如果存在则什么也不做）, 返回 set 本身。
set.delete(value) – 删除 value , 如果在调用的时候存在则返回 true, 否则返回 false。
set.has(value) – 如果则返回 true, 否则返回 false。
set.clear() – 清空 set。
set.size – 返回当前全部元素的数量。
在 Map 和 Set 里迭代总是按照插入的顺序来执行的，所以我们不能说这些集合是无序的，也不可以通过它的数量来记录元素或者直接获取一个元素。