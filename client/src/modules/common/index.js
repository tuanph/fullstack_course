"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const helperFacade_1 = require("./helpers/helperFacade");
__export(require("./ioc/enum"));
__export(require("./connectors/httpConnector"));
__export(require("./models/promise"));
__export(require("./models/basePage"));
const iocHelper_1 = require("./ioc/iocHelper");
const appHelper_1 = require("./helpers/appHelper");
const resourceHelper_1 = require("./helpers/resourceHelper");
let helperFacade = new helperFacade_1.HelperFacade();
helperFacade.iocHelper = iocHelper_1.default;
helperFacade.appHelper = appHelper_1.default;
helperFacade.resourceHelper = resourceHelper_1.default;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helperFacade;
//# sourceMappingURL=index.js.map