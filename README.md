# 库的功能
一个含有a标签的字符串，解析出元素,

# 使用
```
let mockStr = `您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出，
如果需要查询，请访问我们的<a href="www.sina.com" target="_blank" >网站</a>或微信咨询，或官方渠道`;

const extractA = require('extract-a');
let nodesArray = extractA(mockStr);
console.log(nodesArray);

```

# 测试

```
// npm run test

输入=>
您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出，
如果需要查询，请访问我们的<a href="www.sina.com" target="_blank" >网站</a>或微信咨询，或官方渠道

输出=>
[ { type: 'text', content: '您的快件' },
  { type: 'link', content: 'zjs2u38u28347', href: 'www.baidu.com' },
  { type: 'text', content: '已经发出，\n如果需求查询，请访问我们的' },
  { type: 'link', content: '网站', href: 'www.sina.com' },
  { type: 'text', content: '或微信咨询，或官方聚到' } ]
```

# todo


