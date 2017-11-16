import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navState', [
      state('initial', style({
        left: '-30rem'
      })),
      state('show', style({
        left: '0'
      })),
      state('hide', style({
        left: '-30rem'
      })),
      transition('* => show', animate('.2s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => hide', animate('.2s cubic-bezier(0.4, 0.0, 1, 1)'))
    ]),
    trigger('navBackdropState', [
      state('initial', style({
        visibility: 'hidden',
        opacity: '0'
      })),
      state('show', style({
        visibility: 'visible',
        opacity: '1'
      })),
      state('hide', style({
        visibility: 'hidden',
        opacity: '0'
      })),
      transition('* => show', animate('.1s cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => hide', animate('.1s cubic-bezier(0.4, 0.0, 1, 1)'))
    ])
  ]
})
export class AppComponent {

  header: string;
  navState = 'initial';
  navBackdropState = 'initial';

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title ) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        let header;
        if (currentRoute.snapshot.data.alias !== undefined)
          header = currentRoute.snapshot.data.alias;
        else
          header = currentRoute.snapshot.url[0].path;

        this.header = header;
        this.titleService.setTitle(header.toUpperCase());

        // class Title {
        //   constructor(_doc: any)
        //   getTitle(): string
        //   setTitle(newTitle: string)
        // }
      });
  }

  toggleNavState(navState) {
    this.navState = navState;
    this.navBackdropState = navState;
  }
}
