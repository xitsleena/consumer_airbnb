import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.showListings = function () {
        var _this = this;
        this.http.get('http://localhost:5000/api/listings/').subscribe(function (response) {
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var listing = _a[_i];
                var newListing = new Property(listing.title, listing.location, listing.description, listing.numberOfPeople, listing.imgUrl, listing.hostId);
                _this.properties.push(newListing);
            }
        });
        return this.properties;
    };
    PropertyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PropertyService);
    return PropertyService;
}());
export { PropertyService };
/*
  getProperty(id: number): Property {

    return this.getAllProperties().filter(property => property.id == id)[0];
  }
  getAllProperties(): Property[] {
    return [
      new Property(
        1,
        "Cozy Home",
        "Cupertino, California",
        200,
        "4 bedroom, 2 bathroom",
        "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ),
      new Property(
        2,
        "Modern Home",
        "Palo Alto, California",
        158,
        "2 bedroom, 1 bathroom",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ),
      new Property(
        3,
        "Vacation Home",
        "Santa Cruz, California",
        426,
        "4 bedroom, 4 bathroom",
        "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      )
    ]
  }
} */
//# sourceMappingURL=property.service.js.map