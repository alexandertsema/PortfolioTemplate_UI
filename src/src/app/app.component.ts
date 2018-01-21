import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { window } from 'rxjs/operators/window';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private header: string;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) { }

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
          this.titleService.setTitle(`${event.url.toUpperCase()} | ALEXANDER TSEMA`);
        }
      });
  }
}
