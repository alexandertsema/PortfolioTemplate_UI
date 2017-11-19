import { Directive, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimatePulse]'
})
export class AnimatePulseDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    let items = this.el.nativeElement.children;
    let animation = 'pulse';
    let columns = Math.floor(screen.width / items[0].clientWidth);
    let rows = Math.round(items.length / columns);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (items.length > col + row*columns) {
          items[col + row*columns].style.animation = `${animation} ${0.125 * rows}s ease-in-out ${0.25*((row + col) / rows)}s`;
        }
     }
    }
  }
}
