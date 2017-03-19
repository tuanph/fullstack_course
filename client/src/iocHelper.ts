import { PromiseFactory, Promise } from "./promise";
import { IocFactory } from "./ioCFactory";
import appConfig from "./appConfig";

let iocHelper = {
    iocConfig: iocConfig
};
export default iocHelper;
function iocConfig(): Promise {
    let promise: Promise = PromiseFactory.create();
    Window.ioc = IocFactory.create();
    Window.ioc.import(appConfig.ioc);
    promise.resolve({});
    return promise;
}