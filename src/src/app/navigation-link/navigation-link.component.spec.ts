import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLinkComponent } from './navigation-link.component';

describe('PageNotFoundComponent', () => {
  let component: NavigationLinkComponent;
  let fixture: ComponentFixture<NavigationLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
