import { TestBed, inject } from '@angular/core/testing';

import { NavbarHttpServiceService } from './navbar-http-service.service';

describe('NavbarHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarHttpServiceService]
    });
  });

  it('should be created', inject([NavbarHttpServiceService], (service: NavbarHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
