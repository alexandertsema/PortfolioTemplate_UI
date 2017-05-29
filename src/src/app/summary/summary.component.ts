import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { Summary } from "app/models/summary";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockSummary } from "app/mocks/summary.mock";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: Summary;

  constructor(private httpService: HttpService) { }

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
  }
}
