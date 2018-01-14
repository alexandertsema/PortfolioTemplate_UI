import { Directive, Input, ElementRef, HostListener, AfterViewInit, OnChanges, OnInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appAnimatePulse]'
})
export class AnimatePulseDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    let items = this.el.nativeElement.children;
    if (items.length == 0)
      return;

    let animation = 'pulse';
    let rows = Math.floor(this.el.nativeElement.clientHeight / items[0].clientHeight);
    let columns = Math.ceil(items.length / rows);
    // let columns = Math.floor(this.el.nativeElement.clientWidth / items[0].clientWidth);
    // if (columns > items.length) {
    //   columns = items.length
    // }
    // let rows = Math.ceil(items.length / columns);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (items.length > col + row*columns) {
          let item = items[col + row*columns];
          item.style.animation = `${animation} ${0.125 * rows}s ease-in-out ${0.25*((row + col) / rows)}s`;
          item.style['animation-fill-mode'] = 'forwards';
        }
     }
    }
  }
}