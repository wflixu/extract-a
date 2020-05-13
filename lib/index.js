(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractA = void 0;
    /**
     * 提取链接字符串
     * @param raw 输入参数字符串
     */
    function extractA(raw) {
        var output = [];
        var aReg = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g;
        var start = 0;
        var regExpExecArray = aReg.exec(raw);
        var lastRegExpExecArray;
        while (regExpExecArray) {
            lastRegExpExecArray = regExpExecArray;
            var node = {
                type: 'text',
                content: raw.substring(start, regExpExecArray.index),
            };
            output.push(node);
            var link = {
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
            var node = {
                type: 'text',
                content: raw.substring(lastRegExpExecArray.index + lastRegExpExecArray[0].length, raw.length),
            };
            output.push(node);
        }
        // 没有链接
        if (!lastRegExpExecArray && raw.length > 0) {
            var node = {
                type: 'text',
                content: raw,
            };
            output.push(node);
        }
        return output;
    }
    exports.extractA = extractA;
});
