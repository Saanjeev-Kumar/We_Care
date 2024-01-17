import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorsListComponent } from './plasma-donors-list.component';

describe('PlasmaDonorsListComponent', () => {
  let component: PlasmaDonorsListComponent;
  let fixture: ComponentFixture<PlasmaDonorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaDonorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
