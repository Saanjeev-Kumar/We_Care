import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlasmaReceivalComponent } from './register-plasma-receival.component';

describe('RegisterPlasmaReceivalComponent', () => {
  let component: RegisterPlasmaReceivalComponent;
  let fixture: ComponentFixture<RegisterPlasmaReceivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlasmaReceivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlasmaReceivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
