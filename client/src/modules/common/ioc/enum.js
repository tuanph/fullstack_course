"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IocNames = {
    IConnector: "iConnector",
    ICategoryService: "iCategoryService",
    IResourceService: "iResourceService"
};
var IocLifeCycle;
(function (IocLifeCycle) {
    IocLifeCycle[IocLifeCycle["Singleton"] = 0] = "Singleton";
    IocLifeCycle[IocLifeCycle["Transient"] = 1] = "Transient";
})(IocLifeCycle = exports.IocLifeCycle || (exports.IocLifeCycle = {}));
exports.ModulesNames = {
    Inventory: "inventory"
};
//# sourceMappingURL=enum.js.map