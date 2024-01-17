import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationRegistriesListComponent } from './vaccination-registries-list.component';

describe('VaccinationRegistriesListComponent', () => {
  let component: VaccinationRegistriesListComponent;
  let fixture: ComponentFixture<VaccinationRegistriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationRegistriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationRegistriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
