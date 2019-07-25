import * as tslib_1 from "tslib";
import { UserService } from './../../services/user/user.service';
import { PropertyService } from './../../services/property/property.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var ListOfPropertiesPage = /** @class */ (function () {
    function ListOfPropertiesPage(userService, propertyService, navCtrl) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
    }
    ListOfPropertiesPage.prototype.ngOnInit = function () {
        this.currentUser = this.userService.currentUser;
        if (!this.currentUser) {
            this.currentUser = this.userService.getAllUsers()[0];
        }
        this.properties = this.propertyService.getAllProperties();
    };
    ListOfPropertiesPage = tslib_1.__decorate([
        Component({
            selector: 'app-list-of-properties',
            templateUrl: './list-of-properties.page.html',
            styleUrls: ['./list-of-properties.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            PropertyService,
            NavController])
    ], ListOfPropertiesPage);
    return ListOfPropertiesPage;
}());
export { ListOfPropertiesPage };
//# sourceMappingURL=list-of-properties.page.js.map