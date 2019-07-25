import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.role = "role";
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("list-of-properties");
    };
    RegistrationPage.prototype.presentErrorToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'User already exists!',
                            duration: 2000,
                            position: 'top',
                            color: 'danger'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.presentSuccessToast = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Welcome, ' + name + '!',
                            duration: 2000,
                            position: 'top',
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.register = function () {
        var _this = this;
        if (this.name && this.surname && this.email &&
            this.password && this.cpassword &&
            this.password == this.cpassword) {
            console.log("goes into if");
            this.http.post('http://localhost:5000/api/auth/registration', { name: this.name, surname: this.surname,
                email: this.email, password: this.password, role: "user" }).subscribe(function (response) {
                if (response.success) {
                    _this.presentSuccessToast(_this.email);
                    _this.navToListings();
                }
                else {
                    _this.presentErrorToast();
                }
            });
        }
        else {
            console.log("not all fields are filled in");
        }
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ToastController,
            HttpClient])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map