import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoute} from './app.route';

const LAYOUT_ROUTES = [
  appRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
