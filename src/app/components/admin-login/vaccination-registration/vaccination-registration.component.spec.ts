import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationRegistrationComponent } from './vaccination-registration.component';

describe('VaccinationRegistrationComponent', () => {
  let component: VaccinationRegistrationComponent;
  let fixture: ComponentFixture<VaccinationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
