import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaQuizComponent } from './plasma-quiz.component';

describe('PlasmaQuizComponent', () => {
  let component: PlasmaQuizComponent;
  let fixture: ComponentFixture<PlasmaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
