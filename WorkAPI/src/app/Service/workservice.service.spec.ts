import { TestBed } from '@angular/core/testing';

import { WorkserviceService } from './workservice.service';

describe('WorkserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkserviceService = TestBed.get(WorkserviceService);
    expect(service).toBeTruthy();
  });
});
