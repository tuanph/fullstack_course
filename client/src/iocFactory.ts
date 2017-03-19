export class IocFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}
export class IocContainer {
    private registions: Array<any>;
    constructor() {
        this.registions = [];
    }
    public import(registions: Array<any>) {
        this.registions = registions;
    }
    public resolve(name: string): any {
        let declation = this.registions.firstOrDefault((item: any) => {
            item.name = name;
        });
        return new declation.instance();
    }
}