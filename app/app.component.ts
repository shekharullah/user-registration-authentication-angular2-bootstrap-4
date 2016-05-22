import { Component, bind } from '@angular/core';


@Component({
    selector: 'demo-app',
    template: `
<div class="container">
  <nav class="navbar navbar-fixed-top navbar-dark bg-primary">
  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
    &#9776;
  </button>
  <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
    <a class="navbar-brand" href="#">Responsive navbar</a>
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Registration</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  `
})

export class AppComponent { }