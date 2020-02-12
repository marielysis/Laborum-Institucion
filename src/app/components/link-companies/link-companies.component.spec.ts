import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCompaniesComponent } from './link-companies.component';

describe('LinkCompaniesComponent', () => {
  let component: LinkCompaniesComponent;
  let fixture: ComponentFixture<LinkCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
