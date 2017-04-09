import { Promise } from "../models/promise";
export interface IResourceService {
    getModule(name: string): Promise;
    load(name: string): Promise;
}