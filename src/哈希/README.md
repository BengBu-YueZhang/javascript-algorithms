## 哈希

哈希函数解析key, 存储和搜索的过程, 都是通过哈希函数解析键，将它们映射到相应的桶中或者在对应的桶中搜索

假设哈希函数为

```js

y = x ％ 5
```

例如，1987键通过哈希函数的解析分配给桶2，而24分配给桶4。

搜索的时候，我们通过哈希函数解析键，在对应的桶中搜索。

![image](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/09/06/screen-shot-2018-02-19-at-183537.png)

## 哈希函数

![image](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/05/04/screen-shot-2018-05-04-at-145454.png)

完美的哈希函数将是键和桶之间的一对一映射。在大多数情况下，哈希函数并不完美，它需要在桶的数量和桶的容量之间进行权衡。

## 冲突

1987 和 2 都分配给了桶 2， 就是哈希冲突

