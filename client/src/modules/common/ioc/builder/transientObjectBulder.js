"use strict";
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