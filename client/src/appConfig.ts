import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
import { IocNames, IocLifeCycle } from "./enum";
let appConfig = {
    rootApiUrl: "http://localhost:7471/api/",
    ioc: [
        { name: IocNames.ICategoryService, instance: CategoryService, lifeCycle: IocLifeCycle.Singleton },
        { name: IocNames.IConnector, instance: HttpConnector, lifeCycle: IocLifeCycle.Transient },
    ]
};
export default appConfig;