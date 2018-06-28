import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Route} from '@angular/router';
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {CPHomeModule} from '../page/home';
import {HeaderComponent, FooterComponent} from '../components/layouts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CPHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
