import { TestBed } from '@angular/core/testing';

import { RecoverPasswordAdapterService } from './recover-password-adapter.service';
import { RecoverPasswordRequestContract } from 'src/app/shared/contracts/recover-password/request/recover-password-request-contract';
import { RecoverPasswordResponseContract } from 'src/app/shared/contracts/recover-password/response/recover-password-response-contract';
import { RecoverPasswordResponseDto } from 'src/app/shared/dto/recover-password/recover-password-response-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { RecoverPasswordErrorResponseDto } from 'src/app/shared/dto/recover-password/error/recover-password-error-response-dto';

describe('RecoverPasswordAdapterService', () => {
  let recoverPasswordAdapterService: RecoverPasswordAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoverPasswordAdapterService]
    });
    recoverPasswordAdapterService = TestBed.inject(RecoverPasswordAdapterService);
  });

  it('should be created', () => {
    expect(recoverPasswordAdapterService).toBeTruthy();
  });

  it('deve montar a requisição do envio do email para recuperação de senha', () => {

    const email: string = 'admin@email.com';

    const recoverPasswordRequestContract = recoverPasswordAdapterService.toRecoverPasswordRequestContract(email);

    expect(recoverPasswordRequestContract instanceof RecoverPasswordRequestContract).toBeTrue();
    expect(recoverPasswordRequestContract.email).toBe('admin@email.com');
  });

  it('deve montar o DTO a partir da resposta de sucesso do envio do email', () => {

    const loginResponseContract: RecoverPasswordResponseContract = {
      message: 'Um link para a recuperação da senha foi enviada para seu email.'
    };

    const recoverPasswordResponseDto = <RecoverPasswordResponseDto>recoverPasswordAdapterService.toRecoverPasswordResponseDto(loginResponseContract);

    expect(recoverPasswordResponseDto instanceof RecoverPasswordResponseDto).toBeTrue();
    expect(recoverPasswordResponseDto.message).toBe('Um link para a recuperação da senha foi enviada para seu email.');
  });

  it('deve montar o DTO a partir da resposta de erro do envio do email', () => {

    const recoverPasswordResponseError: HttpErrorResponse = new HttpErrorResponse({ error: { message: 'Ocorreu um erro, tente novamente mais tarde.' } });

    const recoverPasswordErrorResponseDto =  <RecoverPasswordErrorResponseDto>recoverPasswordAdapterService.toRecoverPasswordErrorResponseDto(recoverPasswordResponseError);

    expect(recoverPasswordErrorResponseDto instanceof RecoverPasswordErrorResponseDto).toBeTrue();
    expect(recoverPasswordErrorResponseDto.message).toBe('Ocorreu um erro, tente novamente mais tarde.');
  });
});
