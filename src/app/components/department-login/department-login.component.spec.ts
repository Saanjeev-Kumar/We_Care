import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLoginComponent } from './department-login.component';

describe('DepartmentLoginComponent', () => {
  let component: DepartmentLoginComponent;
  let fixture: ComponentFixture<DepartmentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
