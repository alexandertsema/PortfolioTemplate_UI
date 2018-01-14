import { Directive, Input, ElementRef,  AfterViewInit } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appAnimatePulse]'
})
export class AnimatePulseDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const items = this.el.nativeElement.children;
    if (items.length === 0) {
      return;
    }
    const animation = 'pulse';
    const rows = Math.floor(this.el.nativeElement.clientHeight / items[0].clientHeight);
    const columns = Math.ceil(items.length / rows);
    // let columns = Math.floor(this.el.nativeElement.clientWidth / items[0].clientWidth);
    // if (columns > items.length) {
    //   columns = items.length
    // }
    // let rows = Math.ceil(items.length / columns);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (items.length > col + row * columns) {
          const item = items[col + row * columns];
          item.style.animation = `${animation} ${0.125 * rows}s ease-in-out ${0.25 * ((row + col) / rows)}s`;
          item.style['animation-fill-mode'] = 'forwards';
          item.style['opacity'] = '0';
        }
     }
    }
  }
}