import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListOfPropertiesPage } from './list-of-properties.page';
var routes = [
    {
        path: '',
        component: ListOfPropertiesPage
    }
];
var ListOfPropertiesPageModule = /** @class */ (function () {
    function ListOfPropertiesPageModule() {
    }
    ListOfPropertiesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListOfPropertiesPage]
        })
    ], ListOfPropertiesPageModule);
    return ListOfPropertiesPageModule;
}());
export { ListOfPropertiesPageModule };
//# sourceMappingURL=list-of-properties.module.js.map