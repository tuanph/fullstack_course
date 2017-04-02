"use strict";
const categoryService_1 = require("../modules/inventory/_share/services/categoryService");
const index_1 = require("../modules/common/index");
let appConfig = {
    rootApiUrl: "http://localhost:7471/api/",
    ioc: [
        { name: index_1.IocNames.ICategoryService, instance: categoryService_1.CategoryService, lifeCycle: index_1.IocLifeCycle.Singleton },
        { name: index_1.IocNames.IConnector, instance: index_1.HttpConnector, lifeCycle: index_1.IocLifeCycle.Transient },
    ]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appConfig;
//# sourceMappingURL=appConfig.js.map