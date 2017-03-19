import { Promise } from "./promise";
export interface ICategoryService {
    getCategories(): Promise;
    addOrUpdateCategory(category: any): Promise;
}