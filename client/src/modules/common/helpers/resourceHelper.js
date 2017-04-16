"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../ioc/enum");
let resourceHelper = {
    loadResource: loadResource
};
exports.default = resourceHelper;
function loadResource(name) {
    let resourceService = window.ioc.resolve(enum_1.IocNames.IResourceService);
    return resourceService.load(name);
}
//# sourceMappingURL=resourceHelper.js.map