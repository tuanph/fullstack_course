"use strict";
const enum_1 = require("../ioc/enum");
let resourceHelper = {
    loadResource: loadResource
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resourceHelper;
function loadResource(name) {
    let resourceService = window.ioc.resolve(enum_1.IocNames.IResourceService);
    return resourceService.load(name);
}
//# sourceMappingURL=resourceHelper.js.map