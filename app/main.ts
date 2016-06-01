import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';
import { AppComponent }     from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS,FORM_PROVIDERS]);
