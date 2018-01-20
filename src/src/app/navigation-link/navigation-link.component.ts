import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  animations: [
    trigger('hoverState', [
      state('on', style({
        background: 'rgba(0, 0, 0, .6)'
      })),
      state('off', style({
        background: 'none'
      })),
      transition('* => on', animate('.1s cubic-bezier(0, 0, .2, 1)')),
      transition('* => off', animate('.1s cubic-bezier(0, 0, .2, 1)'))
    ])
  ]
})
export class NavigationLinkComponent {
  @Input()
  private route: string;
  @Input()
  private name: string;
  private hoverState: 'on' | 'off';

  toggleHoverState(state: 'on' | 'off') {
    this.hoverState = state;
  }
}
