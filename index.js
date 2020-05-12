module.exports = function (raw) {
  if (typeof raw !== 'string') {
    throw new Error('extractA need a string argument');
    return;
  }
  let output = [];
  let aReg = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g;
  let start = 0;
  let result = aReg.exec(raw);
  let lastRes;
  while (result) {
    lastRes = result;
    let node = {
      type: 'text',
      content: raw.substring(start, result.index),
    };
    output.push(node);
    let link = {
      type: 'link',
      content: result[2],
      href: result[1],
    };
    output.push(link);

    start = result.index + result[0].length;
    result = aReg.exec(raw);
  }
  // 处理结束时的字符窜
  if (lastRes && lastRes.index + lastRes[0].length < raw.length) {
    let node = {
      type: 'text',
      content: raw.substring(lastRes.index + lastRes[0].length, raw.length),
    };
    output.push(node);
  }
  // 没有链接
  if (!lastRes && raw.length > 0) {
    const node = {
      type: 'text',
      content: raw,
    };
    output.push(node);
  }
  return output;
};
