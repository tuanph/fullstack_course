import { IObjectBuilder } from "./iobjectBuilder";
export class SingletonObjectBulder implements IObjectBuilder {
    private obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    public build() {
        let instancefn = !this.obj.instancefn ? new this.obj.instance() : this.obj.instancefn;
        this.obj.instancefn = instancefn;
        console.log(this.obj.instancefn);
        return this.obj.instancefn;
    }
}