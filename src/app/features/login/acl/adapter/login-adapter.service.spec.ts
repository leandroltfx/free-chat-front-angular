import { TestBed } from '@angular/core/testing';

import { LoginAdapterService } from './login-adapter.service';

describe('LoginAdapterService', () => {
  let loginAdapterService: LoginAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginAdapterService,
      ]
    });
    loginAdapterService = TestBed.inject(LoginAdapterService);
  });

  it('should be created', () => {
    expect(loginAdapterService).toBeTruthy();
  });
});
