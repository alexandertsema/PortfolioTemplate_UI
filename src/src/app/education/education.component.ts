import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { School } from "app/models/school";
import { ENDPOINTS } from "app/settings/endpoints";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools: School[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<School[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (schools: School[]) => {
    //           this.schools = schools; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );
  }
}
