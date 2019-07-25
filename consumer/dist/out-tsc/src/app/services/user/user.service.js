import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.login = function (email, password) {
        var user = this.getAllUsers().filter(function (user) { return user.email == email; })[0];
        if ((user) && (user.password == password)) {
            this.currentUser = user;
            return user;
        }
        return null;
    };
    UserService.prototype.getAllUsers = function () {
        return [
            new User('leena', 'zeng', 'alinazeng@ucsb.edu', 'pancakes'),
            new User('baleena', 'badoink', 'badoink@gmail.com', 'waffles')
        ];
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map