import { Component, OnInit } from '@angular/core';
// import { HttpService } from "app/services/http.service";
import { Summary } from "app/models/summary";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockSummary } from "app/mocks/summary.mock";
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary;
  mediaQuery: Subscription;

  // constructor(private httpService: HttpService) { }
  constructor(private observableMedia: ObservableMedia) {}

  ngOnInit() {
    // this.httpService.get<Summary>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (summary: Summary) => {
    //           this.summary = summary;
    //         },
    //         (error: any) =>
    //           console.error(error)
    //     );
    this.summary = mockSummary;

    this.mediaQuery = this.observableMedia.subscribe( (change: MediaChange) => {
      this.setImage(change.mqAlias);
    });
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
}
