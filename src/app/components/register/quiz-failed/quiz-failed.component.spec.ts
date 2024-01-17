import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFailedComponent } from './quiz-failed.component';

describe('QuizFailedComponent', () => {
  let component: QuizFailedComponent;
  let fixture: ComponentFixture<QuizFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
