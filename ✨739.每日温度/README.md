```js
const 气温 = [73, 74, 75, 71, 69, 72, 76, 73]


// 从尾向头开始遍历
// 第一步
index = 7
result = [0]
stack = [7(73)]

// 第二步
// 76 > 73
index = 6
result = [0, 0]
stack = [6(76)]

// 第三步
index = 5
result = [6 - 5, 0, 0] => [1, 0, 0]
stack = [6(76), 5(72)]

// 第四步
index = 4
result = [5 - 4, 1, 0, 0] => [1, 1, 0, 0]
stack = [6(76), 5(72), 4(69)]

// 第五步
index = 3
result = [5 - 3, 1, 1, 0, 0] => [2, 1, 1, 0, 0]
stack = [6(76), 5(72), 3(71)]

// 第六步
index = 2
result = [6 - 2, 2, 1, 1, 0, 0] => [4, 2, 1, 1, 0, 0]
stack = [6(76), 2(75)]

// 第七步
index = 1
result = [2 - 1, 4, 2, 1, 1, 0, 0] => [1, 4, 2, 1, 1, 0, 0]
stack = [6(76), 2(75), 1(74)]

// 第八步
index = 0
result = [1 - 0, 1, 4, 2, 1, 1, 0, 0] => [1, 1, 4, 2, 1, 1, 0, 0]
stack = [6(76), 2(75), 1(74), 0(73)]
```

本题的思路，是从后向前遍历

堆栈始终维护着，一个逐渐上升的索引集合

如果想知道，当前天之后，多少天是气温上升的。只需要比较，当前天和堆栈顶的索引之差