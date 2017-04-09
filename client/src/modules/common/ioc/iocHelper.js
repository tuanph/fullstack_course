"use strict";
const promise_1 = require("../models/promise");
const ioCFactory_1 = require("./ioCFactory");
// import appConfig from "./appConfig";
// import appConfig from "../../../config/appConfig";appConfig.ioc
let iocHelper = {
    configIoC: configIoC
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = iocHelper;
function configIoC(appConfig) {
    let promise = promise_1.PromiseFactory.create();
    window.ioc = ioCFactory_1.IocFactory.create();
    window.ioc.import(appConfig.ioc);
    promise.resolve({});
    return promise;
}
//# sourceMappingURL=iocHelper.js.map