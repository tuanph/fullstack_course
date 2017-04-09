"use strict";
// import 
class BasePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // let self = this;
        // let resourceService: IResourceService = window.ioc.resolve(IocNames.IResourceService);
        // self.i18n["inventory"] = resourceService.resolve("inventory");
    }
    ngAfterViewInit() {
        this.onReady();
    }
    onReady() {
    }
    navigation(url, ...options) {
        let params = options || [];
        params.unshift(url); //nhet Url vao vi tri dau tien
        this.router.navigate([url, params]);
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.js.map