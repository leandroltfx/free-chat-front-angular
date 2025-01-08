import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginAdapterService } from './login-adapter.service';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response-dto';
import { HttpErrorResponseDto } from '../../../../shared/dto/error/http-error-response-dto';
import { LoginRequestContract } from '../../../../shared/contracts/login/request/login-request-contract';
import { LoginResponseContract } from '../../../../shared/contracts/login/response/login-response-contract';

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

    const loginResponseDto = <LoginResponseDto>loginAdapterService.loginResponseContractToDto(loginResponseContract);

    expect(loginResponseDto instanceof LoginResponseDto).toBeTrue();
    expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
    expect(loginResponseDto.user.email).toBe('admin@email.com');
    expect(loginResponseDto.user.username).toBe('admin');
  });

  it('deve montar o DTO a partir da resposta de erro do login', () => {

    const loginResponseError: HttpErrorResponse = new HttpErrorResponse({ error: { message: 'Ocorreu um erro no login, tente novamente mais tarde.' } });

    const loginResponseDto = <HttpErrorResponseDto>loginAdapterService.loginResponseContractToDto(loginResponseError);

    expect(loginResponseDto instanceof HttpErrorResponseDto).toBeTrue();
    expect(loginResponseDto.message).toBe('Ocorreu um erro no login, tente novamente mais tarde.');
  });
});
