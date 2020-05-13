
const extractA = require('./index.js');

test('no a link', () => {
    expect(extractA('您的快件或官方渠道')).toEqual([
        {
            type: 'text',
            content: '您的快件或官方渠道'
        }
    ]);
});
test('one a in middle', () => {
    let mockStr = `您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出`;
    let rightResult =
        [{ type: 'text', content: '您的快件' },
        { type: 'link', content: 'zjs2u38u28347', href: 'www.baidu.com' },
        { type: 'text', content: '已经发出' }];

    expect(JSON.stringify(extractA(mockStr))).toBe(JSON.stringify(rightResult));
});

test('two a in middle', () => {
    let mockStr = `您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出，如果需求查询，请访问我们的<a href="www.sina.com" target="_blank" >网站</a>或微信咨询，或官方渠道`;
    let rightResult =
        [{ type: 'text', content: '您的快件' },
        { type: 'link', content: 'zjs2u38u28347', href: 'www.baidu.com' },
        { type: 'text', content: '已经发出，如果需求查询，请访问我们的' },
        { type: 'link', content: '网站', href: 'www.sina.com' },
        { type: 'text', content: '或微信咨询，或官方渠道' }];

    expect(JSON.stringify(extractA(mockStr))).toBe(JSON.stringify(rightResult));
});




//   const extractA = require('./index');
// console.log('****************************');
// console.log('test 1');
// let mockStr = `您的快件<a href="www.baidu.com" target="_blank" >zjs2u38u28347</a>已经发出，
// 如果需求查询，请访问我们的<a href="www.sina.com" target="_blank" >网站</a>或微信咨询，或官方渠道`;


// let nodesArray = extractA(mockStr);
// console.log(nodesArray);

// console.log('****************************');
// console.log('test 2');
// mockStr = `您的快件或官方渠道`;
// nodesArray = extractA(mockStr);
// console.log(nodesArray);
