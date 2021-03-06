import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MatDatepickerModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatSlideToggleModule, MatCheckboxModule
} from '@angular/material';

import {HOME_ROUTE} from './home.route';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    MatCheckboxModule, MatDatepickerModule, MatButtonModule, MatCardModule, MatRadioModule, MatSlideToggleModule,
    RouterModule.forRoot([HOME_ROUTE], {useHash: true})
  ],
  declarations: [
    HomeComponent,
  ],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CPHomeModule {
}
