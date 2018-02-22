import { Component, OnInit, Input, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { generateSlugFromTitle } from 'app/utils/helpers';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input()
  public type: number;
  @Input()
  public id: number;
  @Input()
  public title: string;
  @Input()
  public subtitle: string;
  @Input()
  public image: string;
  @Input()
  public buttonText: string;
  @Input()
  public url?: string;
  public detailedViewPath: string;

  constructor(private router: Router, private location: Location) { }
  ngOnInit(): void {
    const slug = generateSlugFromTitle([this.title, this.subtitle]);
    this.detailedViewPath = `${this.location.path()}/details/${slug}-${this.id}`;
  }
}
