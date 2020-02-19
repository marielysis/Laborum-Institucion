import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorRegisterComponent } from './contenedor-register.component';

describe('ContenedorRegisterComponent', () => {
  let component: ContenedorRegisterComponent;
  let fixture: ComponentFixture<ContenedorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
