import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // private swipeCoord?: [number, number];
  // private swipeTime?: number;
  private header: string;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title ) { }

  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if  (event instanceof NavigationEnd) {
          let currentRoute = this.route.root;
          while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          if (currentRoute.snapshot.data.alias !== undefined)
            this.header = currentRoute.snapshot.data.alias;
          else
            this.header = currentRoute.snapshot.url[0].path;
          this.titleService.setTitle(`${currentRoute.snapshot.routeConfig.path.toUpperCase()} | ALEXANDER TSEMA`);
        }
      });
  }

  // swipe(e: TouchEvent, when: string): void {
  //   const coords: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
  //   const time = new Date().getTime();

  //   if (when === 'start') {
  //     this.swipeCoord = coords;
  //     this.swipeTime = time;
  //   }
  //   else if (when === 'end') {
  //     const direction = [coords[0] - this.swipeCoord[0], coords[1] - this.swipeCoord[1]];
  //     const duration = time - this.swipeTime;

  //     if (duration < 1000
  //           && Math.abs(direction[1]) < Math.abs(direction[0])
  //             && Math.abs(direction[0]) > 30) {
  //       const swipe = direction[0] < 0 ? 'hide' : 'show';
  //       this.toggleNavState(swipe);
  //     }
  //   }
  // }
}
