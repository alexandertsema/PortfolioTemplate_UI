import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navState', [
      state('show', style({
        '-webkit-transform': 'translateX(30rem)',
        transform: 'translateX(30rem)'
      })),
      state('hide', style({
        '-webkit-transform': 'none',
        transform: 'none'
      })),
      transition('hide => show', animate('.2s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('show => hide', animate('.2s cubic-bezier(0.4, 0.0, 1, 1)'))
    ]),
    trigger('navBackdropState', [
      state('show', style({
        visibility: 'visible',
        opacity: '1'
      })),
      state('hide', style({
        visibility: 'hidden',
        opacity: '0'
      })),
      transition('hide => show', animate('.1s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('show => hide', animate('.1s cubic-bezier(0.4, 0.0, 1, 1)'))
    ])
  ]
})
export class AppComponent {

  private swipeCoord?: [number, number];
  private swipeTime?: number;
  private header: string;
  private navState: 'show' | 'hide';
  private navBackdropState: 'show' | 'hide';

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title ) {
      this.navState = this.navBackdropState = 'hide';
   }

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

  toggleNavState(state) {
    this.navState = state;
    this.navBackdropState = state;
  }


  swipe(e: TouchEvent, when: string): void {
    const coords: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coords;
      this.swipeTime = time;
    }
    else if (when === 'end') {
      const direction = [coords[0] - this.swipeCoord[0], coords[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000
            && Math.abs(direction[1]) < Math.abs(direction[0])
              && Math.abs(direction[0]) > 30) {
        const swipe = direction[0] < 0 ? 'hide' : 'show';
        this.toggleNavState(swipe);
      }
    }
  }
}
