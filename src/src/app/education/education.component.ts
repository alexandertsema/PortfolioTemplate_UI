import { Component, OnInit } from '@angular/core';
import { ISchool } from "app/models/school";
import { mockSchools } from "app/mocks/schools.mock";
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  schools: Observable<ISchool[]>;

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.schools = this.httpService.get<ISchool[]>('education');
  }

  detailedView(id: number) {
    this.router.navigate([`education/details/${id}`]);
  }
}
