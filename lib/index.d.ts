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
export declare function extractA(raw: string): Array<Inode>;
