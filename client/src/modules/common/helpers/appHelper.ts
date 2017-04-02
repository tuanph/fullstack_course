class AppHelper {
    public injector: IInjector = null;
    public config: any = null;
    public setInjector(injector: IInjector) {
        this.injector = injector;
    }
    public setConfig(config: any) {
        this.config = config;
    }
}
let appHelper = new AppHelper();
export default appHelper;
export interface IInjector {
    get(type: any): any;
}