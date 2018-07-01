import {Component} from '@angular/core';

// import * as anime from 'animejs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [],
  styleUrls: [
    'about.scss'
  ]

})
export class AboutComponent {
  properties: any;
  property: any;
  countries: any;
  country: any;
  types: any;
  type: any;
  search: any;
  inactive: any;
  totalPages: any;
  checked: boolean;
  labelPosition: string;
  indeterminate: boolean;
  disabled: boolean;
  color: string;

  constructor() {
    this.color = 'accent';
    this.checked = false;
    this.disabled = false;
  }

  $onInit() {

  }

}
