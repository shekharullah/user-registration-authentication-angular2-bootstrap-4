import { Component }          from '@angular/core';
import {ControlMessages } from 'app/services/control-message.component';
import { ValidationService } from 'app/services/validation.service';
import { FormBuilder, Validators } from '@angular/common';

@Component({
    selector: 'registration',
    moduleId: module.id,
    template: `
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div class="card card-block">
                    <h3 class="text-xs-center">Register Account</h3>
                    <hr>
                    <form [ngFormModel]="userForm" (submit)="saveUser()">
                    <fieldset>
                        <div class="form-group">
                            <input class="form-control input-lg" placeholder="User Name" name="name" type="text" ngControl="name" id="name" />
                            <control-messages control="name"></control-messages>
                        </div>
                        <div class="form-group">
                            <input class="form-control input-lg" placeholder="E-mail Address" name="email" type="text" ngControl="email" id="email">
                            <control-messages control="email"></control-messages>
                        </div>
                        <div class="form-group">
                            <input class="form-control input-lg" placeholder="Password" name="password" value="" type="password" ngControl="password" id="password">
                            <control-messages control="password"></control-messages>
                        </div>
                        <div class="form-group">
                            <input class="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" ngControl="confirmPassword" id="confirmPassword">
                            <control-messages control="confirmPassword"></control-messages>
                        <div *ngIf="userForm.hasError('mismatchedPasswords')">Passwords do not match.</div>
                        </div>
                       
                        <div class="checkbox">
                            <label class="small">
                                <input name="terms" type="checkbox">I have read and agree to the <a href="#">terms of service</a>
                            </label>
                        </div>
                        <input class="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit">
                    </fieldset>
</form>
                </div>
        </div>
    </div>
</div>
`,
    directives: [ControlMessages]
})

export class RegistrationComponent {
    userForm: any;

    constructor(
        private _formBuilder: FormBuilder) {

        this.userForm = this._formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', Validators.compose([Validators.required,ValidationService.passwordValidator])],
            'confirmPassword': ['', Validators.required]
        }, {validator: ValidationService.matchPassword('password', 'confirmPassword')});
    }

    saveUser() {
        if (this.userForm.dirty && this.userForm.valid) {
            alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
        }
    }
}

