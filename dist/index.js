"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsend = void 0;
exports.jsend = {
    success(data) {
        const jsd = { status: "success", data };
        return Object.assign(Object.assign({}, jsd), { toString: () => JSON.stringify(jsd) });
    },
    fail(data) {
        const jsd = { status: "fail", data };
        return Object.assign(Object.assign({}, jsd), { toString: () => JSON.stringify(jsd) });
    },
    error(message, code, data) {
        const jsd = { status: "error", message };
        if (typeof code === 'string') {
            jsd.code = code;
        }
        else if (code) {
            jsd.code = parseInt(`${code}`);
        }
        if (data !== undefined)
            jsd.data = data;
        return Object.assign(Object.assign({}, jsd), { toString: () => JSON.stringify(jsd) });
    }
};
//# sourceMappingURL=index.js.map