import { TestBed } from '@angular/core/testing';

import { LoginFacadeService } from './login-facade.service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';

describe('LoginFacadeService', () => {
  let loginFacadeService: LoginFacadeService;
  let loginProxyServiceSpy: jasmine.SpyObj<LoginProxyService>;
  let loginAdapterServiceSpy: jasmine.SpyObj<LoginAdapterService>;

  beforeEach(() => {

    loginProxyServiceSpy = jasmine.createSpyObj('LoginProxyService', ['login']);
    loginAdapterServiceSpy = jasmine.createSpyObj('LoginAdapterService', ['toLoginRequestContract', 'loginResponseContractToLoginResponseDto']);

    TestBed.configureTestingModule({
      providers: [
        LoginFacadeService,
        { provide: LoginAdapterService, useValue: loginAdapterServiceSpy },
        { provide: LoginProxyService, useValue: loginProxyServiceSpy }
      ]
    });
    loginFacadeService = TestBed.inject(LoginFacadeService);
  });

  it('should be created', () => {
    expect(loginFacadeService).toBeTruthy();
  });
});
