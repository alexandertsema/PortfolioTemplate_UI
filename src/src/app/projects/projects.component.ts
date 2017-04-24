import { Component, OnInit } from '@angular/core';
import { Project } from "app/models/project";
import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<Project[]>(ENDPOINTS.certificate)
        .subscribe(
            (projects: Project[]) => {
              this.projects = projects; 
            },
            (error: any) => 
              console.error(error)
        );
  }
}
