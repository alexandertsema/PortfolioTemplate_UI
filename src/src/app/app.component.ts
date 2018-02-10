import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { window } from 'rxjs/operators/window';
import { Element } from '@angular/compiler';
import { MetaService } from 'app/services/meta/meta.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public header: string;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags();
    this.router.events
      .subscribe(event => {
        if  (event instanceof NavigationEnd) {
          let currentRoute = this.route.root;
          while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          if (currentRoute.snapshot.data.alias !== undefined) {
            this.header = currentRoute.snapshot.data.alias;
          } else {
            this.header = currentRoute.snapshot.url[0].path;
          }
          this.titleService.setTitle(`${event.url.replace('/', '').toUpperCase()}
            | Alexander Tsema | Senior Full Stack Software Engineer | New York`);
        }
      });
  }
}
