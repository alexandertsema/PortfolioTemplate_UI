import { Component, OnInit } from '@angular/core';
// import { HttpService } from "app/services/http.service";
import { Summary } from "app/models/summary";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockSummary } from "app/mocks/summary.mock";
import { ScreenSize } from 'app/models/enums/screenSize';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary;

  // constructor(private httpService: HttpService) { }

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
    if (ScreenSize.xs <= window.screen.width) {
      this.summary.image.data = this.summary.image.responsiveData.xs;
    }
    if (ScreenSize.m <= window.screen.width) {
      this.summary.image.data = this.summary.image.responsiveData.m;
    }
  }
}
