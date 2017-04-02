/// <reference path="extension.d.ts" />
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./modules/inventory/securityModule";
import helperFacade from "./modules/common/index";

helperFacade.iocHelper.configIoC().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule);
});
