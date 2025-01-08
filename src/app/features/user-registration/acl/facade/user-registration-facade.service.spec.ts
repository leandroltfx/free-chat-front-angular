import { TestBed } from '@angular/core/testing';

import { UserRegistrationFacadeService } from './user-registration-facade.service';

describe('UserRegistrationFacadeService', () => {
  let service: UserRegistrationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
