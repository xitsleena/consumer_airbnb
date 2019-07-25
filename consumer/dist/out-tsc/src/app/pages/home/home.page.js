import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';
import { HttpClient } from '@angular/common/http';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, userService, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.password_type = 'password';
    }
    HomePage.prototype.togglePasswordMode = function () {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("list-of-properties");
    };
    HomePage.prototype.navToRegistration = function () {
        this.navCtrl.navigateForward("registration");
    };
    HomePage.prototype.presentErrorToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Incorrect username or password!',
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
    HomePage.prototype.presentSuccessToast = function (name) {
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
    HomePage.prototype.login = function () {
        var _this = this;
        if (this.email && this.password) {
            this.http.post('http://localhost:5000/api/auth/login', { email: this.email, password: this.password }).subscribe(function (response) {
                if (response.success) {
                    _this.presentSuccessToast(_this.email);
                    _this.navToListings();
                }
                else {
                    _this.presentErrorToast();
                }
            });
        }
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService,
            ToastController,
            HttpClient])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map