"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const transientObjectBulder_1 = require("./builder/transientObjectBulder");
const singletonObjectBulder_1 = require("./builder/singletonObjectBulder");
const appHelper_1 = require("../helpers/appHelper");
class IocFactory {
    static create() {
        return new IocContainer();
    }
}
exports.IocFactory = IocFactory;
class IocContainer {
    constructor() {
        this.registrations = [];
    }
    register(registrations) {
        if (registrations == null || registrations.length == 0) {
            return;
        }
        ;
        let self = this;
        registrations.forEach((item) => {
            self.registrations.push(item);
        });
    }
    import(registrations) {
        this.registrations = registrations;
    }
    resolve(obj) {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declation = this.registrations.firstOrDefault((item) => {
            return item.name == obj;
        });
        let objectBuilder = this.getObjectBuilder(declation);
        return objectBuilder.build();
    }
    getObjectBuilder(declation) {
        switch (declation.lifeCycle) {
            case enum_1.IocLifeCycle.Singleton:
                return new singletonObjectBulder_1.SingletonObjectBulder(declation);
            default:
            case enum_1.IocLifeCycle.Transient:
                return new transientObjectBulder_1.TransientObjectBulder(declation);
        }
    }
    resolveAngularObject(obj) {
        return appHelper_1.default.injector.get(obj);
    }
}
exports.IocContainer = IocContainer;
//# sourceMappingURL=ioCFactory.js.map