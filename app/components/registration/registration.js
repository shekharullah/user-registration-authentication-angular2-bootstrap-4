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
var control_message_component_1 = require('app/services/control-message.component');
var validation_service_1 = require('app/services/validation.service');
var common_1 = require('@angular/common');
var RegistrationComponent = (function () {
    function RegistrationComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.userForm = this._formBuilder.group({
            'name': ['', common_1.Validators.required],
            'email': ['', common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
            'password': ['', common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            'confirmPassword': ['', common_1.Validators.required]
        }, { validator: validation_service_1.ValidationService.matchPassword('password', 'confirmPassword') });
    }
    RegistrationComponent.prototype.saveUser = function () {
        if (this.userForm.dirty && this.userForm.valid) {
            alert("Name: " + this.userForm.value.name + " Email: " + this.userForm.value.email);
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            moduleId: module.id,
            template: "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\">\n                <div class=\"card card-block\">\n                    <h3 class=\"text-xs-center\">Register Account</h3>\n                    <hr>\n                    <form [ngFormModel]=\"userForm\" (submit)=\"saveUser()\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control input-lg\" placeholder=\"User Name\" name=\"name\" type=\"text\" ngControl=\"name\" id=\"name\" />\n                            <control-messages control=\"name\"></control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control input-lg\" placeholder=\"E-mail Address\" name=\"email\" type=\"text\" ngControl=\"email\" id=\"email\">\n                            <control-messages control=\"email\"></control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control input-lg\" placeholder=\"Password\" name=\"password\" value=\"\" type=\"password\" ngControl=\"password\" id=\"password\">\n                            <control-messages control=\"password\"></control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control input-lg\" placeholder=\"Confirm Password\" name=\"password\" value=\"\" type=\"password\" ngControl=\"confirmPassword\" id=\"confirmPassword\">\n                            <control-messages control=\"confirmPassword\"></control-messages>\n                        <div *ngIf=\"userForm.hasError('mismatchedPasswords')\">Passwords do not match.</div>\n                        </div>\n                       \n                        <div class=\"checkbox\">\n                            <label class=\"small\">\n                                <input name=\"terms\" type=\"checkbox\">I have read and agree to the <a href=\"#\">terms of service</a>\n                            </label>\n                        </div>\n                        <input class=\"btn btn-lg btn-primary btn-block\" value=\"Sign Me Up\" type=\"submit\">\n                    </fieldset>\n</form>\n                </div>\n        </div>\n    </div>\n</div>\n",
            directives: [control_message_component_1.ControlMessages]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.js.map