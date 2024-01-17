import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVaccinationComponent } from './register-vaccination.component';

describe('RegisterVaccinationComponent', () => {
  let component: RegisterVaccinationComponent;
  let fixture: ComponentFixture<RegisterVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
