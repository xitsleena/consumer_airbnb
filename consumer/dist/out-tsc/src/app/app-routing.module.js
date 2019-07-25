import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'list-of-properties', loadChildren: './pages/list-of-properties/list-of-properties.module#ListOfPropertiesPageModule' },
    { path: 'property/:id', loadChildren: './pages/property/property.module#PropertyPageModule' },
    { path: 'bookings', loadChildren: './pages/bookings/bookings.module#BookingsPageModule' },
    { path: 'bookings/:userId', loadChildren: './pages/bookings/bookings.module#BookingsPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map