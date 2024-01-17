import { TestBed } from '@angular/core/testing';

import { HospitalTokenInceptorService } from './hospital-token-inceptor.service';

describe('HospitalTokenInceptorService', () => {
  let service: HospitalTokenInceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalTokenInceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
