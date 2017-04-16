"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingletonObjectBulder {
    constructor(obj) {
        this.obj = obj;
    }
    build() {
        let instancefn = !this.obj.instancefn ? new this.obj.instance() : this.obj.instancefn;
        this.obj.instancefn = instancefn;
        console.log(this.obj.instancefn);
        return this.obj.instancefn;
    }
}
exports.SingletonObjectBulder = SingletonObjectBulder;
//# sourceMappingURL=singletonObjectBulder.js.map