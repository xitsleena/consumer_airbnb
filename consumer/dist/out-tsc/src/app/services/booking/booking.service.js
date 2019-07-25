import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from './../../models/property.model';
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.properties = [];
    }
    BookingService.prototype.showBookings = function () {
        var _this = this;
        this.http.get('http://localhost:5000/api/bookings/:userId').subscribe(function (response) {
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var listing = _a[_i];
                var newListing = new Property(listing.title, listing.location, listing.pricePerNight, listing.numberOfPeople, listing.description, listing.imgUrl, listing.hostId);
                _this.properties.push(newListing);
            }
        });
        return this.properties;
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map