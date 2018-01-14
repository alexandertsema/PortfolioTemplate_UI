import { Component, OnInit } from '@angular/core';
// import { HttpService } from "app/services/http.service";
import { ISchool } from "app/models/school";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockSchools } from "app/mocks/schools.mock";
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  schools: ISchool[];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.httpService.get<School[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (schools: School[]) => {
    //           this.schools = schools; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );

    this.schools = mockSchools;
  }

  detailedView(id: number) {
    this.router.navigate([`education/details/${id}`]);
  }
}
