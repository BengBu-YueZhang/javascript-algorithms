## 什么是前缀树?

![image](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/02/07/screen-shot-2018-01-31-at-163403.png)

1. root节点是空字符串
2. 节点所有的后代都与该节点相关的字符串有着共同的前缀

## 如何表示一个前缀树？

trie树的children可以用数组或者HashMap表示，数组里表示每一个子节点，或者Hash里每个key表示不同的子节点

```js
{
  val: 'a',
  chidren: [
    {
      val: 'b',
      children: [
        ...
      ]
    },
    {
      val: 'c',
    }
  ]
}

// map
{
  a: {
    b: {
      e: {
        a: null
      }
    },
    c: {
      d: {
        c: null
      },
      b: {
      }
    }
  }
}
```

## 前缀树实现插入

![image](https://i.loli.net/2019/02/26/5c74dcd258855.png)
![image](https://i.loli.net/2019/02/26/5c74dcd06513c.png)
![image](https://i.loli.net/2019/02/26/5c74dccec950e.png)
![image](https://i.loli.net/2019/02/26/5c74dccdd6dc2.png)

## 前缀树实现搜索

![image](https://i.loli.net/2019/02/26/5c74dd882274c.png)
![image](https://i.loli.net/2019/02/26/5c74dd89900cc.png)
![image](https://i.loli.net/2019/02/26/5c74dd8a5c7b5.png)

### 搜索单词