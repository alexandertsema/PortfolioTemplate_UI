import { Component, OnInit, Input, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {

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

  constructor(private router: Router, private location: Location) { }

  detailedView(id: number) {
    this.router.navigate([`${this.location.path()}/details/${id}`]);
  }
}
