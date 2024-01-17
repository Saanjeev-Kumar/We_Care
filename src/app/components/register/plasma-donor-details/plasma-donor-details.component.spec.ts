import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorDetailsComponent } from './plasma-donor-details.component';

describe('PlasmaDonorDetailsComponent', () => {
  let component: PlasmaDonorDetailsComponent;
  let fixture: ComponentFixture<PlasmaDonorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaDonorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
