import { PromiseFactory, Promise } from "./promise";
import { IocFactory } from "./ioCFactory";
import appConfig from "./appConfig";
let iocHelper = {
    configIoC: configIoC
}
export default iocHelper;
function configIoC(): Promise {
    let promise = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);
    promise.resolve({});
    return promise;
}