import { IocLifeCycle } from "./enum";
import { IObjectBuilder } from "./builder/iobjectBuilder";
import { TransientObjectBulder } from "./builder/transientObjectBulder";
import { SingletonObjectBulder } from "./builder/singletonObjectBulder";
import appHelper from "../helpers/appHelper";
export class IocFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}
export class IocContainer {
    private registrations: Array<any>;
    constructor() {
        this.registrations = []

    }
    public register(registrations: Array<any>) {
        if (registrations == null || registrations.length == 0) { return };
        let self = this;
        registrations.forEach((item: any) => {
            self.registrations.push(item);
        });
    }
    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }
    public resolve(obj: any): any {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declation = this.registrations.firstOrDefault((item: any) => {
            return item.name == obj;
        });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declation);
        return objectBuilder.build();
    }
    private getObjectBuilder(declation: any): IObjectBuilder {
        switch (declation.lifeCycle) {
            case IocLifeCycle.Singleton:
                return new SingletonObjectBulder(declation);
            default:
            case IocLifeCycle.Transient:
                return new TransientObjectBulder(declation);
        }
    }
    private resolveAngularObject(obj: any) {
        return appHelper.injector.get(obj);
    }
}