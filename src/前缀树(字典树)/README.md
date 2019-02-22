## 什么是前缀树?

![image](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/02/07/screen-shot-2018-01-31-at-163403.png)

1. root节点是空字符串
2. 节点所有的后代都与该节点相关的字符串有着共同的前缀

## 如何表示一个前缀树？

trie树的children可以用数组或者HashMap表示

## 插入