import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaQuizReceivalComponent } from './plasma-quiz-receival.component';

describe('PlasmaQuizReceivalComponent', () => {
  let component: PlasmaQuizReceivalComponent;
  let fixture: ComponentFixture<PlasmaQuizReceivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaQuizReceivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaQuizReceivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
