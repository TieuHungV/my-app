import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MatDatepickerModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatSlideToggleModule, MatCheckboxModule
} from '@angular/material';

import {ABOUT_ROUTE} from './about.route';
import {AboutComponent} from './about.component';

@NgModule({
  imports: [
    MatCheckboxModule, MatDatepickerModule, MatButtonModule, MatCardModule, MatRadioModule, MatSlideToggleModule,
    RouterModule.forRoot([ABOUT_ROUTE], {useHash: true})
  ],
  declarations: [
    AboutComponent,
  ],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CPAboutModule {
}
