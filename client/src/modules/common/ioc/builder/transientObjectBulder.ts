import { IObjectBuilder } from "./iobjectBuilder";

export class TransientObjectBulder implements IObjectBuilder {
    private obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    public build() {
        return new this.obj.instance();
    }
}