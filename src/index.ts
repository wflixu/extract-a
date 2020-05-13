/**
 * 文本节点的类型
 */
export interface Inode {
  type: 'text' | 'link';
  content: string;
  href?: string;
}
/**
 * 提取链接字符串
 * @param raw 输入参数字符串
 */
export function extractA(raw: string): Array<Inode> {
  const output: Array<Inode> = [];
  const aReg: RegExp = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g;
  let start: number = 0;
  let regExpExecArray: RegExpExecArray|null = aReg.exec(raw);
  let lastRegExpExecArray;
  while (regExpExecArray) {
    lastRegExpExecArray = regExpExecArray;
    const node:Inode = {
      type: 'text',
      content: raw.substring(start, regExpExecArray.index),
    };
    output.push(node);
    const link:Inode = {
      type: 'link',
      content: regExpExecArray[2],
      href: regExpExecArray[1],
    };
    output.push(link);

    start = regExpExecArray.index + regExpExecArray[0].length;
    regExpExecArray = aReg.exec(raw);
  }
  // 处理结束时的字符窜
  if (lastRegExpExecArray && lastRegExpExecArray.index + lastRegExpExecArray[0].length < raw.length) {
    const node:Inode = {
      type: 'text',
      content: raw.substring(lastRegExpExecArray.index + lastRegExpExecArray[0].length, raw.length),
    };
    output.push(node);
  }
  // 没有链接
  if (!lastRegExpExecArray && raw.length > 0) {
    const node:Inode = {
      type: 'text',
      content: raw,
    };
    output.push(node);
  }
  return output;
}
