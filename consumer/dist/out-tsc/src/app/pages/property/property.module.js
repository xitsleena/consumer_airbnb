import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PropertyPage } from './property.page';
var routes = [
    {
        path: '',
        component: PropertyPage
    }
];
var PropertyPageModule = /** @class */ (function () {
    function PropertyPageModule() {
    }
    PropertyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PropertyPage]
        })
    ], PropertyPageModule);
    return PropertyPageModule;
}());
export { PropertyPageModule };
//# sourceMappingURL=property.module.js.map