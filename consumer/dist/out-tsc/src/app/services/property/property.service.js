import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Property } from 'src/app/models/property.model';
var PropertyService = /** @class */ (function () {
    function PropertyService() {
    }
    PropertyService.prototype.getProperty = function (id) {
        return this.getAllProperties().filter(function (property) { return property.id == id; })[0];
    };
    PropertyService.prototype.getAllProperties = function () {
        return [
            new Property(1, "Cozy Home", "Cupertino, California", 200, "4 bedroom, 2 bathroom", "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"),
            new Property(2, "Modern Home", "Palo Alto, California", 158, "2 bedroom, 1 bathroom", "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"),
            new Property(3, "Vacation Home", "Santa Cruz, California", 426, "4 bedroom, 4 bathroom", "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
        ];
    };
    PropertyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PropertyService);
    return PropertyService;
}());
export { PropertyService };
//# sourceMappingURL=property.service.js.map