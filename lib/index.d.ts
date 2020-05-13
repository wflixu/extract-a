export interface Inode {
    type: 'text' | 'link';
    content: string;
    href?: string;
}
export declare function extractA(raw: string): Array<Inode>;
