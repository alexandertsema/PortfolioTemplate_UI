import { Component, OnInit, Input } from '@angular/core';
import { IDetails } from 'app/models/details';
import { projectDetails } from 'app/mocks/projectDetails.mock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  isVisible: boolean;
  details: IDetails;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');

    this.details = projectDetails;
  }

  goBack(): void {
    this.location.back();
  }

}
