import { PromiseFactory, Promise } from "../models/promise";
import { IocFactory } from "./ioCFactory";
// import appConfig from "./appConfig";
// import appConfig from "../../../config/appConfig";appConfig.ioc
let iocHelper = {
    configIoC: configIoC
}
export default iocHelper;
function configIoC(appConfig: any): Promise {
    let promise = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);
    promise.resolve({});
    return promise;
}