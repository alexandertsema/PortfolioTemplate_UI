import { Component, OnInit, Input, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  animations: [
    trigger('footerState', [
      state('initial', style({
        marginBottom: '-5.5em'
      })),
      state('down', style({
        transform: 'translateY(0)'
      })),
      state('up', style({
        transform: 'translateY(-5.5em)'
      })),
      transition('* => up', animate('.3s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => down', animate('.3s cubic-bezier(0.4, 0.0, 1, 1)'))
    ])
  ]
})
export class GridItemComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  subtitle: string;
  @Input()
  image: string;
  @Input()
  buttonText: string;
  footerState: string = "initial";

  constructor() { }

  ngOnInit() {
  }

  toggleFooterState(footerState) {
    this.footerState = footerState;
  }
}
