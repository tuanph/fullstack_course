"use strict";
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
//# sourceMappingURL=enum.js.map