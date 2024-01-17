import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlasmaDonationComponent } from './register-plasma-donation.component';

describe('RegisterPlasmaDonationComponent', () => {
  let component: RegisterPlasmaDonationComponent;
  let fixture: ComponentFixture<RegisterPlasmaDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlasmaDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlasmaDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
