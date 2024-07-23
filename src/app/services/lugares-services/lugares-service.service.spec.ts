import { TestBed } from '@angular/core/testing';

import { LugaresServiceService } from './lugares-service.service';

describe('LugaresServiceService', () => {
  let service: LugaresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugaresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
