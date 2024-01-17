import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForHospitalComponent } from './registration-for-hospital.component';

describe('RegistrationForHospitalComponent', () => {
  let component: RegistrationForHospitalComponent;
  let fixture: ComponentFixture<RegistrationForHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationForHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
