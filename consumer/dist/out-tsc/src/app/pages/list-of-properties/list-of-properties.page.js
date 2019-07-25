import * as tslib_1 from "tslib";
import { UserService } from './../../services/user/user.service';
import { PropertyService } from './../../services/property/property.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
var ListOfPropertiesPage = /** @class */ (function () {
    function ListOfPropertiesPage(userService, propertyService, navCtrl, http) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ListOfPropertiesPage.prototype.ngOnInit = function () {
        this.properties = this.propertyService.showListings();
    };
    ListOfPropertiesPage = tslib_1.__decorate([
        Component({
            selector: 'app-list-of-properties',
            templateUrl: './list-of-properties.page.html',
            styleUrls: ['./list-of-properties.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            PropertyService,
            NavController,
            HttpClient])
    ], ListOfPropertiesPage);
    return ListOfPropertiesPage;
}());
export { ListOfPropertiesPage };
//# sourceMappingURL=list-of-properties.page.js.map