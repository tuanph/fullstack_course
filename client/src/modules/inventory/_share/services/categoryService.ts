import { Promise, IConnector, IocNames } from "../../../../modules/common/index";
import { AddOrUpdateCategoryModel } from "../../category/addOrUpdateCategoryModel";
export class CategoryService {
    public getCategories(): Promise {
        let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
        return iConnector.get("/categories");
    }
    // public addOrUpdateCategory(category: AddOrUpdateCategoryModel): Promise {
    //     let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
    //     return iConnector.post("/categories", category);
    // }
}