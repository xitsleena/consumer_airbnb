import * as tslib_1 from "tslib";
import { PropertyService } from './../../services/property/property.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var PropertyPage = /** @class */ (function () {
    function PropertyPage(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
    }
    PropertyPage.prototype.ngOnInit = function () {
        var propertyId = parseInt(this.route.snapshot.paramMap.get('id'));
        //this.property = this.propertyService.getProperty(propertyId);
    };
    PropertyPage.prototype.bookNow = function () { };
    PropertyPage = tslib_1.__decorate([
        Component({
            selector: 'app-property',
            templateUrl: './property.page.html',
            styleUrls: ['./property.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, PropertyService])
    ], PropertyPage);
    return PropertyPage;
}());
export { PropertyPage };
//# sourceMappingURL=property.page.js.map