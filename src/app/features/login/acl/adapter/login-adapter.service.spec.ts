import { TestBed } from '@angular/core/testing';

import { LoginAdapterService } from './login-adapter.service';
import { LoginRequestContract } from 'src/app/shared/contracts/login/request/login-request-contract';
import { LoginResponseContract } from 'src/app/shared/contracts/login/response/login-response-contract';
import { LoginResponseDto } from 'src/app/shared/dto/login/login-response-dto';
import { HttpErrorResponseDto } from 'src/app/shared/dto/error/http-error-response-dto';
import { HttpErrorResponse } from '@angular/common/http';

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

  it('deve montar a requisição do login', () => {

    const email: string = 'admin@email.com';
    const password: string = 'admin123';

    const loginRequestContract = loginAdapterService.toLoginRequestContract(email, password);

    expect(loginRequestContract instanceof LoginRequestContract).toBeTrue();
    expect(loginRequestContract.email).toBe('admin@email.com');
    expect(loginRequestContract.password).toBe('admin123');
  });

  it('deve montar o DTO a partir da resposta de sucesso do login', () => {

    const loginResponseContract: LoginResponseContract = {
      message: 'Login efetuado com sucesso!',
      user: {
        email: 'admin@email.com',
        username: 'admin',
      }
    };

    const loginResponseDto = loginAdapterService.loginResponseContractToLoginResponseDto(loginResponseContract);

    expect(loginResponseDto instanceof LoginResponseDto).toBeTrue();
    expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
  });
});
