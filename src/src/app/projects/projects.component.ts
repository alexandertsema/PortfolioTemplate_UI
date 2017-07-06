import { Component, OnInit } from '@angular/core';
import { Project } from "app/models/project";
import { HttpService } from "app/services/http.service";
import { ENDPOINTS } from "app/settings/endpoints";
import { mockProject } from "app/mocks/project.mock";
import { IProjectCategory } from "app/models/projectCategory";
import { mockProjectCategories } from "app/mocks/projectCategory.mock";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  _projects: Project[];
  projectCategoryFilter: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<Project[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (projects: Project[]) => {
    //           this.projects = projects; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );

    
    this._projects = mockProject;
  }

  onFilterChange(filterValue: number) {
    this.projectCategoryFilter = filterValue;
  }

  get projects(): Project[]{
    if (+this.projectCategoryFilter != 0 && typeof this.projectCategoryFilter != 'undefined') {
      return this._projects.map((project) => {
        let match = project.projectCategory.id == (+this.projectCategoryFilter);
        if(!match)
          return null;
        else
          return project;
      }).filter(x => !!x);
    } else {
      return this._projects;
    }
  }
}