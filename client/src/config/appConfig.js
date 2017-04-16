"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("@app/themes/default");
const common_1 = require("@app/common");
let appConfig = {
    modules: [common_1.ModulesNames.Inventory],
    rootApiUrl: "http://localhost:7471/api/",
    layout: default_1.DefaultLayout,
    ioc: []
};
exports.default = appConfig;
//# sourceMappingURL=appconfig.js.map