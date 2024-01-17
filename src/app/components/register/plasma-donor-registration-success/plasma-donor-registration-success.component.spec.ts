import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorRegistrationSuccessComponent } from './plasma-donor-registration-success.component';

describe('PlasmaDonorRegistrationSuccessComponent', () => {
  let component: PlasmaDonorRegistrationSuccessComponent;
  let fixture: ComponentFixture<PlasmaDonorRegistrationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaDonorRegistrationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorRegistrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
