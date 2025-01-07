import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginProxyService } from './login-proxy.service';

describe('LoginProxyService', () => {
  let loginProxyService: LoginProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LoginProxyService,
      ]
    });
    loginProxyService = TestBed.inject(LoginProxyService);
  });

  it('should be created', () => {
    expect(loginProxyService).toBeTruthy();
  });
});
