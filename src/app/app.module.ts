import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Frame work
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';

import {CPPageModule} from '../page/page.module';

import {AppRoutingModule} from './app-routing.module';
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
    CPPageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
