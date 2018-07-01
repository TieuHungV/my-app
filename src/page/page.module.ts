import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CPHomeModule} from './home';
import {CPAboutModule} from './about';

@NgModule({
  imports: [
    CPHomeModule,
    CPAboutModule
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CPPageModule {
}
