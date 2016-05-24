"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var registration_1 = require('./components/registration/registration');
var home_1 = require('./components/home/home');
var login_1 = require('./components/login/login');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS],
            template: "\n<div class=\"container\">\n  <nav class=\"navbar navbar-fixed-top navbar-dark bg-primary\">\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n    &#9776;\n  </button>\n  <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n    <a class=\"navbar-brand\" >Responsive navbar</a>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item active\">\n        <a name=\"home\" class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li name=\"registration\" class=\"nav-item\">\n       <a class=\"nav-link\" [routerLink]=\"['/registration']\" >Registration</a>\n      </li>\n      <li class=\"nav-item\">\n        <a name=\"login\" class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n</div><br><br><br><br>\n\n<div class=\"container\"><router-outlet></router-outlet></div>\n\n\n  "
        }),
        router_1.Routes([
            { path: '/', component: home_1.HomeComponent },
            { path: '/registration', component: registration_1.RegistrationComponent },
            { path: '/login', component: login_1.LoginComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map