import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IProjectCategory } from 'app/models/projectCategory';
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-category-filter',
  templateUrl: './project-category-filter.component.html',
  styleUrls: ['./project-category-filter.component.scss']
})
export class ProjectCategoryFilterComponent implements OnInit {

  public projectCategories: Observable<IProjectCategory[]>;
  @Output()
  public onFilter = new EventEmitter<number>();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.projectCategories = this.httpService.get<IProjectCategory[]>('projectCategories');
  }

  public onFilterEnter(filterValue: number) {
    this.onFilter.emit(filterValue);
  }
}
