# 库的功能
一个含有a标签的字符串，解析出元素
输入=>
```
点我sh<a href="www.baidu.com" target="_blank" >哈哈</a>第二v额 <a href="www.sina.com" target="_blank" >sina</a>acteseetee
```

输入
```
[ { type: 'text', content: '点我' },
  { type: 'link', content: '哈哈', href: 'www.baidu.com' },
  { type: 'text', content: '第二v额 ' },
  { type: 'link', content: 'sina', href: 'www.sina.com' },
  { type: 'text', content: 'acteseetee' } ]
```

