import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  animations: [
    trigger('hoverState', [
      state('on', style({
        background: 'rgba(90, 91, 91, .1)'
      })),
      state('off', style({
        background: 'none'
      })),
      transition('* => on', animate('0s')),
      transition('* => off', animate('0s'))
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
