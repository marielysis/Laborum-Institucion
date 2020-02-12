import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementVacanciesComponent } from './management-vacancies.component';

describe('ManagementVacanciesComponent', () => {
  let component: ManagementVacanciesComponent;
  let fixture: ComponentFixture<ManagementVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
