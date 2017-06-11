import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCategoryFilterComponent } from './project-category-filter.component';

describe('ProjectCategoryFilterComponent', () => {
  let component: ProjectCategoryFilterComponent;
  let fixture: ComponentFixture<ProjectCategoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCategoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
