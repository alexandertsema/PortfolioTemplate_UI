import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger('navState', [
      state('show', style({
        '-webkit-transform': 'translateX(30rem)',
        transform: 'translateX(30rem)',
        'box-shadow': '1px 0px 13px -3px rgba(0,0,0,0.87)'
      })),
      state('hide', style({
        '-webkit-transform': 'none',
        transform: 'none',
        'box-shadow': 'none'
      })),
      transition('hide => show', animate('.2s cubic-bezier(0, 0, .2, 1)')),
      transition('show => hide', animate('.2s cubic-bezier(.4, 0, 1, 1)'))
    ]),
    trigger('navBackdropState', [
      state('show', style({
        visibility: 'visible',
        opacity: '1'
      })),
      state('hide', style({
        visibility: 'hidden',
        opacity: '0'
      })),
      transition('hide => show', animate('.1s cubic-bezier(0, 0, .2, 1)')),
      transition('show => hide', animate('.1s cubic-bezier(.4, 0, 1, 1)'))
    ])
  ]
})
export class NavigationMenuComponent {
  private navState: 'show' | 'hide';
  private navBackdropState: 'show' | 'hide';

  constructor() {
    this.navState = this.navBackdropState = 'hide';
  }

  toggleNavState(state: 'show' | 'hide') {
    this.navState = state;
    this.navBackdropState = state;
  }

}
