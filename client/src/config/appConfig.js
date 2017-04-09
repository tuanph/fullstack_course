"use strict";
const categoryService_1 = require("../modules/inventory/_share/services/categoryService");
const common_1 = require("@app/common");
const default_1 = require("@app/themes/default");
let appConfig = {
    modules: ["inventory"],
    rootApiUrl: "http://localhost:7471/api/",
    layout: default_1.DefaultLayout,
    ioc: [
        { name: common_1.IocNames.ICategoryService, instance: categoryService_1.CategoryService, lifeCycle: common_1.IocLifeCycle.Singleton },
        { name: common_1.IocNames.IConnector, instance: common_1.HttpConnector, lifeCycle: common_1.IocLifeCycle.Transient },
    ]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appConfig;
//# sourceMappingURL=appconfig.js.map