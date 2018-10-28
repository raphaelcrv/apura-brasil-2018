import { TestBed } from '@angular/core/testing';

import { ApurationService } from './apuration.service';

describe('ApurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApurationService = TestBed.get(ApurationService);
    expect(service).toBeTruthy();
  });
});
