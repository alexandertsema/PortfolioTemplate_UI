import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IProjectCategory } from "app/models/projectCategory";
import { mockProjectCategories } from "app/mocks/projectCategory.mock";

@Component({
  selector: 'app-project-category-filter',
  templateUrl: './project-category-filter.component.html',
  styleUrls: ['./project-category-filter.component.scss']
})
export class ProjectCategoryFilterComponent implements OnInit {

  projectCategories : IProjectCategory[];
  @Output()
  onFilter = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
    this.projectCategories = mockProjectCategories;
  }

  private onFilterEnter(filterValue : number){
    this.onFilter.emit(filterValue);
  }
}
