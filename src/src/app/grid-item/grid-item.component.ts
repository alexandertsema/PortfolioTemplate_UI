import { Component, OnInit, Input, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  animations: [
    trigger('contentState', [
      state('initial', style({
        marginBottom: '-26rem'
      })),
      state('down', style({
        transform: 'translateY(0)'
      })),
      state('up', style({
        transform: 'translateY(-26rem)'
      })),
      transition('* => up', animate('.3s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => down', animate('.3s cubic-bezier(0.4, 0.0, 1, 1)'))
    ])
  ]
})
export class GridItemComponent implements OnInit {

  @Input()
  type: number;
  @Input()
  id: number;
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  image: string;
  @Input()
  buttonText: string;
  @Input()
  url?: string;
  contentState: string = "initial";

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  toggleContentState(contentState) {
    this.contentState = contentState;
  }

  detailedView(id: number) {
    this.router.navigate([`${this.location.path()}/details/${id}`]);
  }
}
