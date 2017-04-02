import { AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
export class BasePage implements AfterViewInit {
    protected router: Router;
    constructor(router: Router) {
        this.router = router;
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