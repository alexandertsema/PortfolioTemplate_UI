import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { navMenuRoutes } from '../../app.routes'

@Directive({
  selector: '[appScrollNav]'
})
export class ScrollNavDirective {
  private prevRoute: string;
  private nextRoute: string;

  constructor(private el: ElementRef, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.router.events
      .subscribe(event => {
        if  (event instanceof NavigationEnd) {
          const currentRoute = this.formatRoute(event.url);
          let currentIndex = navMenuRoutes.map(x => x.path).indexOf(currentRoute);
          const prevElement = navMenuRoutes[currentIndex - 1];
          const nextElement = navMenuRoutes[currentIndex + 1];

          this.prevRoute = prevElement ? prevElement.path : null
          this.nextRoute = nextElement ? nextElement.path : null;

          console.log(this.prevRoute);
          console.log(currentRoute);
          console.log(this.nextRoute);
        }
    });
   }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const top = event.currentTarget.scrollY;
    const height = this.el.nativeElement.scrollHeight;
    const offset = this.el.nativeElement.offsetHeight;

    if (top === 0) {
      this.router.navigate([this.prevRoute]);
    } else if (top > height - offset - 1) {
      this.router.navigate([this.nextRoute]);
    }
  }

  formatRoute(val: string) {
    return val.replace('/', '');
  }
}