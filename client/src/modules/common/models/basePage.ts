import { AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import {IResourceService} from "../services/iResourceService";
// import 
export class BasePage implements AfterViewInit {
    protected router: Router;
    protected i18n: any;
    constructor(router: Router) {
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
    protected onReady() {
    }
    protected navigation(url: string, ...options: Array<any>) {
        let params = options || [];
        params.unshift(url);//nhet Url vao vi tri dau tien
        this.router.navigate([url, params]);

    }
}