import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContComponent } from './profile-cont.component';

describe('ProfileContComponent', () => {
  let component: ProfileContComponent;
  let fixture: ComponentFixture<ProfileContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
