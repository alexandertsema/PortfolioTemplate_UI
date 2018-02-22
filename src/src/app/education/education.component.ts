import { Component, OnInit } from '@angular/core';
import { ISchool } from 'app/models/school';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';
import { generateSlugFromTitle } from 'app/utils/helpers';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public schools: Observable<ISchool[]>;

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.schools = this.httpService.get<ISchool[]>('education');
  }
  getSlug(input: string[]): string {
    return generateSlugFromTitle(input);
  }
}
