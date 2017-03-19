import { IocLifeCycle } from "./enum";
import { IObjectBuilder } from "./builder/iobjectBuilder";
import { TransientObjectBulder } from "./builder/transientObjectBulder";
import { SingletonObjectBulder } from "./builder/singletonObjectBulder";
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
    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }
    public resolve(name: string): any {
        let declation = this.registrations.firstOrDefault((item: any) => {
            return item.name == name;
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
}