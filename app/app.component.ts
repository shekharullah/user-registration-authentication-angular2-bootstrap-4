import { provide, Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration'
import {HomeComponent} from './components/home/home'
import {LoginComponent} from './components/login/login'

@Component({
    selector: 'demo-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: `
<div class="container">
  <nav class="navbar navbar-fixed-top navbar-dark bg-primary">
  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
    &#9776;
  </button>
  <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
    <a class="navbar-brand" >Responsive navbar</a>
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a name="home" class="nav-link" [routerLink]="['/']">Home <span class="sr-only">(current)</span></a>
      </li>
      <li name="registration" class="nav-item">\n\
       <a class="nav-link" [routerLink]="['/registration']" >Registration</a>
      </li>
      <li class="nav-item">
        <a name="login" class="nav-link" [routerLink]="['/login']">Login</a>
      </li>
    </ul>
  </div>
</nav>

</div><br><br><br><br>

<div class="container"><router-outlet></router-outlet></div>


  `
})
@Routes([
        { path: '/', component: HomeComponent},
        { path: '/registration', component: RegistrationComponent},
        { path: '/login', component: LoginComponent }
    ])

export class AppComponent {
}