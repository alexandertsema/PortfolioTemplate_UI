import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/models/summary';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router'
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';
import { SpinnerService } from 'app/services/spinner/spinner.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  public summary: ISummary;
  private watcher: Subscription;

  constructor(private observableMedia: ObservableMedia, private router: Router, private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get<ISummary>('summary')
      .subscribe(summary => {
        this.summary = summary;
        this.watchMediaChange();
      });
  }

  watchMediaChange() {
    this.watcher = this.observableMedia.subscribe( (change: MediaChange) => {
      this.setImage(change.mqAlias);
    });
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  setImage(alias: string) {
    switch (alias) {
      case 'xs': this.summary.image.data = this.summary.image.responsiveData.xs; break;
      case 's': this.summary.image.data = this.summary.image.responsiveData.xs; break;
      case 'm': this.summary.image.data = this.summary.image.responsiveData.m; break;
      case 'l': this.summary.image.data = this.summary.image.responsiveData.m; break;
      case 'xl': this.summary.image.data = this.summary.image.responsiveData.m; break;
      case 'xxl': this.summary.image.data = this.summary.image.responsiveData.m; break;
      default: this.summary.image.data = null; break;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
