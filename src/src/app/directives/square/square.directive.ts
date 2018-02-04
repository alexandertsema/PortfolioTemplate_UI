import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSquare]'
})
export class SquareDirective implements AfterViewInit {
  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
    this.el.nativeElement.style.height = `${this.el.nativeElement.clientWidth}px`;
  }
}
