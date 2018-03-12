import { TestBed, inject } from '@angular/core/testing';

import { BackStatusService } from './back-status.service';

describe('BackStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackStatusService]
    });
  });

  it('should be created', inject([BackStatusService], (service: BackStatusService) => {
    expect(service).toBeTruthy();
  }));
});
