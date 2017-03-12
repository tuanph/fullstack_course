import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
let appConfig = {
    rootApiUrl: "http://localhost:7471/api/",
    ioc: [
        { name: "categoryService", instance: CategoryService },
        { name: "iConnector", instance: HttpConnector },
    ]
};
export default appConfig;