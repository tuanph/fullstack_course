"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appHelper;
//# sourceMappingURL=appHelper.js.map