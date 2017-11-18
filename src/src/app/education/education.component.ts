import { Component, OnInit } from '@angular/core';
// import { HttpService } from "app/services/http.service";
import { ISchool } from "app/models/school";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockSchools } from "app/mocks/shools.mock";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  schools: ISchool[];
  isVisible: string = "hidden";

  // constructor(private httpService: HttpService) { }

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
    console.log(id); // trigger expand of project-detailed component
    this.isVisible = 'visible';
  }
}
