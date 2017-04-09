import { CategoryService } from "../modules/inventory/_share/services/categoryService";
import { IocNames, IocLifeCycle, HttpConnector } from "@app/common";
import {DefaultLayout} from "@app/themes/default"; 
let appConfig = {
    rootApiUrl: "http://localhost:7471/api/",
    layout: DefaultLayout,
    ioc: [
        { name: IocNames.ICategoryService, instance: CategoryService, lifeCycle: IocLifeCycle.Singleton },
        { name: IocNames.IConnector, instance: HttpConnector, lifeCycle: IocLifeCycle.Transient },
    ]
};
export default appConfig;