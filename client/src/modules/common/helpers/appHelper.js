"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppHelper {
    constructor() {
        this.injector = null;
        this.config = null;
    }
    setInjector(injector) {
        this.injector = injector;
    }
    setConfig(config) {
        this.config = config;
    }
}
let appHelper = new AppHelper();
exports.default = appHelper;
//# sourceMappingURL=appHelper.js.map