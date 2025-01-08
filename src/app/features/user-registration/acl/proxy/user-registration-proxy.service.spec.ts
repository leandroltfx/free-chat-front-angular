import { TestBed } from '@angular/core/testing';

import { UserRegistrationProxyService } from './user-registration-proxy.service';

describe('UserRegistrationProxyService', () => {
  let service: UserRegistrationProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
