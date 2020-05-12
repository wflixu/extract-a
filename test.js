



let mockStr = `您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出，
如果需求查询，请访问我们的<a href="www.sina.com" target="_blank" >网站</a>或微信咨询，或官方渠道`;

const extractA = require('./index');
const nodesArray = extractA(mockStr);
console.lognodesArray);

