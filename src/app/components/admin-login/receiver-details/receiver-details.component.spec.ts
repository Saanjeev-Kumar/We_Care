import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDetailsComponent } from './receiver-details.component';

describe('ReceiverDetailsComponent', () => {
  let component: ReceiverDetailsComponent;
  let fixture: ComponentFixture<ReceiverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
