import { Component, OnInit, Input } from '@angular/core';
import { IDetails } from 'app/models/details';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from 'app/services/http/http.service';
import { IDetailsType } from 'app/models/enums/detailsType';
import { Title } from '@angular/platform-browser';
import { BASE_TITLE } from 'app/utils/constants';
import { generateTitleFromSlug } from 'app/utils/helpers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public details: IDetails;
  public type: IDetailsType;
  public backPath: string;

  constructor(private route: ActivatedRoute, private location: Location, private httpService: HttpService,  private titleService: Title) { }

  ngOnInit() {
    this.type = IDetailsType[this.route.snapshot.paramMap.get('type')];
    const slug = this.route.snapshot.paramMap.get('slug');
    const slugArr = slug.split('-');
    const id = slugArr[slugArr.length - 1];

    this.titleService.setTitle(`${generateTitleFromSlug(slug)} | ${BASE_TITLE}`);

    this.httpService.get<IDetails>(`${this.type}/details/${id}`)
      .subscribe(details => {
        this.details = details;
      });

    this.backPath = this.type;
  }
}
