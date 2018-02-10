import { Component, OnInit, Input } from '@angular/core';
import { IDetails } from 'app/models/details';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from 'app/services/http/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public details: IDetails;

  constructor(private route: ActivatedRoute, private location: Location, private httpService: HttpService) { }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');

    this.httpService.get<IDetails>(`${type}/details/${id}`)
      .subscribe(details => {
        this.details = details;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
