"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const formButton_1 = require("./components/formButton");
const formInput_1 = require("./components/formInput");
const page_1 = require("./components/page");
const formPrimaryButton_1 = require("./components/formPrimaryButton");
const horizontalForm_1 = require("./components/horizontalForm");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule],
        declarations: [formButton_1.FormButton, formInput_1.FormInput, page_1.Page, formPrimaryButton_1.FormPrimaryButton, horizontalForm_1.HorizontalForm],
        exports: [formButton_1.FormButton, formInput_1.FormInput]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=commonModule.js.map