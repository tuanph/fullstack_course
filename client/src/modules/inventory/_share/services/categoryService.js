"use strict";
const index_1 = require("../../../../modules/common/index");
class CategoryService {
    getCategories() {
        let iConnector = window.ioc.resolve(index_1.IocNames.IConnector);
        return iConnector.get("/categories");
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map