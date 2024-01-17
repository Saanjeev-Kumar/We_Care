import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginForHospitalComponent } from './admin-login-for-hospital.component';

describe('AdminLoginForHospitalComponent', () => {
  let component: AdminLoginForHospitalComponent;
  let fixture: ComponentFixture<AdminLoginForHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginForHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginForHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
