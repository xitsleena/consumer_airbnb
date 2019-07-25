import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BookingService } from './../../services/booking/booking.service';
import { ActivatedRoute } from '@angular/router';
var BookingsPage = /** @class */ (function () {
    function BookingsPage(route, bookingService) {
        this.route = route;
        this.bookingService = bookingService;
        this.bookings = [];
        this.properties = [];
    }
    BookingsPage.prototype.ngOnInit = function () {
        var userId = parseInt(this.route.snapshot.paramMap.get('userId'));
        this.properties = this.bookingService.showBookings();
    };
    BookingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-bookings',
            templateUrl: './bookings.page.html',
            styleUrls: ['./bookings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            BookingService])
    ], BookingsPage);
    return BookingsPage;
}());
export { BookingsPage };
//# sourceMappingURL=bookings.page.js.map