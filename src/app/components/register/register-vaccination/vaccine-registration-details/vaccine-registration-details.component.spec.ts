import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineRegistrationDetailsComponent } from './vaccine-registration-details.component';

describe('VaccineRegistrationDetailsComponent', () => {
  let component: VaccineRegistrationDetailsComponent;
  let fixture: ComponentFixture<VaccineRegistrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineRegistrationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
