"use strict";
let urlHelper = {
    resolveModule: resolveModule
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = urlHelper;
function resolveModule(name) {
    // return "./src/modules/" + name + "/" + name + "Module" + String.toPascal(name) + "Module";
    return String.format("./src/modules/{0}/{0}Module#{1}Module", name, String.toPascal(name));
}
//# sourceMappingURL=urlHelper.js.map