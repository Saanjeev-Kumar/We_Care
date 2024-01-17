import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorousalTextComponent } from './corousal-text.component';

describe('CorousalTextComponent', () => {
  let component: CorousalTextComponent;
  let fixture: ComponentFixture<CorousalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorousalTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorousalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
