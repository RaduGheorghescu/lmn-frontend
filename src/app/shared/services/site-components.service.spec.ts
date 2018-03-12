import { TestBed, inject } from '@angular/core/testing';

import { SiteComponentsService } from './site-components.service';

describe('SiteComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteComponentsService]
    });
  });

  it('should be created', inject([SiteComponentsService], (service: SiteComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
