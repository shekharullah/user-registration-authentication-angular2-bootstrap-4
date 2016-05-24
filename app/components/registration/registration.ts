import { Component }          from '@angular/core';
@Component({
    selector: 'registration',
    moduleId: module.id,
    template: `
    <div class="login-page">
	<div class="row">
		<div class="col-lg-6 ">
			<h1>User Registration</h1>
			<form role="form">
				<div class="form-content">
					<div class="form-group">
						<input type="text" class="form-control input-underline input-lg" id="" placeholder="Full Name">
					</div>

					<div class="form-group">
						<input type="text" class="form-control input-underline input-lg" id="" placeholder="Email">
					</div>

					<div class="form-group">
						<input type="password" class="form-control input-underline input-lg" id="" placeholder="Password">
					</div>
					<div class="form-group">
						<input type="password" class="form-control input-underline input-lg" id="" placeholder="Repeat Password">
					</div>
				</div>
				<a type="submit" class="btn rounded-btn" (click)="gotoDashboard()"> Register </a>&nbsp;
			</form>
		</div>	
	</div>
</div>
`
})

export class RegistrationComponent {
}

