import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Project } from "app/models/project";
// import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockProject } from "app/mocks/project.mock";
import { IProjectCategory } from "app/models/projectCategory";
import { mockProjectCategories } from "app/mocks/projectCategory.mock";

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  allProjects: Project[];
  projects: Project[];
  projectCategoryFilter: number;

  constructor() { }

  ngOnInit() {
    // this.httpService.get<Project[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (projects: Project[]) => {
    //           this.projects = projects; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );

    this.projects = this.allProjects = mockProject;
  }

  onFilterChange(filterValue: number) {
    if (filterValue != 0) {
      this.projects = this.allProjects.filter((project) => project.projectCategory.id == filterValue);
    } else {
      this.projects = this.allProjects;
    }
  }
}
