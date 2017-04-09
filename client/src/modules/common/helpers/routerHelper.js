"use strict";
const urlHelper_1 = require("./urlHelper");
let routeHelper = {
    getModuleRoute: getModuleRoute
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeHelper;
function getModuleRoute(modules) {
    let routes = [];
    modules.forEach((module) => {
        routes.push({
            path: module, loadChildren: urlHelper_1.default.resolveModule(module)
        });
    });
    return routes;
}
//# sourceMappingURL=routerHelper.js.map