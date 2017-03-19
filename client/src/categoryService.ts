import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { AddOrUpdateCategoryModel } from "./addOrUpdateCategoryModel";
import { IocNames } from "./enum";
export class CategoryService {
    public getCategories(): Promise {
        let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
        return iConnector.get("/categories");
    }
    public addOrUpdateCategory(category: AddOrUpdateCategoryModel): Promise {
        let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
        return iConnector.post("/categories", category);
    }
}