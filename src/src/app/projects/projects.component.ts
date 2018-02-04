import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { IProject } from "app/models/project";
import { IProjectCategory } from "app/models/projectCategory";

import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpService } from 'app/services/http/http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  allProjects: IProject[];
  projects: IProject[];
  projectCategoryFilter: number;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get<IProject[]>('projects')
      .subscribe(projects => {
        this.projects = this.allProjects = projects;
      });
  }

  onFilterChange(filterValue: number) {
    if (filterValue != 0) {
      this.projects = this.allProjects.filter((project) => project.projectCategory.id == filterValue);
    } else {
      this.projects = this.allProjects;
    }
  }
}
