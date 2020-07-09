import { TestBed } from '@angular/core/testing';

import { CustomserviceService } from './customservice.service';

describe('CustomserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomserviceService = TestBed.get(CustomserviceService);
    expect(service).toBeTruthy();
  });
});
