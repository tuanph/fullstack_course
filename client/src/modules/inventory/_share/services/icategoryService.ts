import { Promise } from "../../../../modules/common/index";
export interface ICategoryService {
    getCategories(): Promise;
    addOrUpdateCategory(category: any): Promise;
}