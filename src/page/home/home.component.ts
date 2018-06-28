import {Component, OnDestroy, OnInit} from '@angular/core';
import * as anime from 'animejs';

// import {anime} from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [],
  styleUrls: [
    'home.scss'
  ]

})
export class HomeComponent {
  properties: any;
  property: any;
  countries: any;
  country: any;
  types: any;
  type: any;
  search: any;
  inactive: any;
  totalPages: any;

  constructor() {
    setTimeout(() => {
      this.demmoFunction();
      this.animeShow();
    }, 1000);
  }

  $onInit() {

  }

  demmoFunction() {
    const path = anime.path('#motionPath path');

    const motionPath = anime({
      targets: '#motionPath .el',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      loop: true
    });
  }

  animeShow() {
    const logoAnimation = anime.timeline({
      direction: 'alternate',
      loop: true
    });
    const data = [
      {
        targets: '.stripes path',
        translateX: [-1000, 0],
        opacity: {
          value: 1,
          duration: 100
        },
        fill: '#F9C100',
        delay: (el, i) => 2200 + (i * 75),
        duration: 400,
        easing: 'easeOutExpo',
        offset: 0
      }, {
        targets: '.katakana path',
        d: (el) => el.getAttribute('data-d'),
        opacity: {
          value: [0, 1],
          duration: 100
        },
        fill: '#F9C100',
        delay: (el, i) => 2400 + (i * 120),
        duration: 1200,
        easing: 'easeOutCirc',
        offset: 0
      }, {
        targets: '.text-fills path',
        opacity: [0, 1],
        fill: '#F9C100',
        easing: 'easeOutExpo',
        duration: 200,
        delay: (t, i) => 3300 + (anime.random(0, 450)),
        offset: 0
      }, {
        targets: '.line',
        translateX: (target) => {
          const x = 1200;
          let translate;
          if (target.classList.contains('hori')) {
            translate = anime.random(0, 1) ? x : -x;
          }
          if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) {
            translate = x / 3;
          }
          return [translate, 0];
        },
        translateY: (target) => {
          const y = 1200;
          let translate;
          if (target.classList.contains('vert')) {
            translate = anime.random(0, 1) ? y : -y;
          }
          if (target.classList.contains('diag-right')) {
            translate = -y / 3;
          }
          if (target.classList.contains('diag-left')) {
            translate = y / 3;
          }
          return [translate, 0];
        },
        scale: {
          value: [6, 1],
          duration: 500,
        },
        stroke: '#F9C100',
        opacity: {
          value: [0, 1],
          duration: 100,
        },
        delay: (t, i) => (i * 25),
        duration: 500,
        easing: 'easeOutQuart',
        offset: 0
      }
    ];
    logoAnimation.add(data);
  }

}
