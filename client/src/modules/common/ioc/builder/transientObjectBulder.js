"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransientObjectBulder {
    constructor(obj) {
        this.obj = obj;
    }
    build() {
        return new this.obj.instance();
    }
}
exports.TransientObjectBulder = TransientObjectBulder;
//# sourceMappingURL=transientObjectBulder.js.map