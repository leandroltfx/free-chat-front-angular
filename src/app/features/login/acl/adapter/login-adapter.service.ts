import { Injectable } from '@angular/core';

import { LoginResponseDto } from '../../../../shared/dto/login/login-response-dto';
import { LoginRequestContract } from '../../../../shared/contracts/login/request/login-request-contract';
import { LoginResponseContract } from '../../../../shared/contracts/login/response/login-response-contract';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorResponseDto } from 'src/app/shared/dto/error/http-error-response-dto';

@Injectable()
export class LoginAdapterService {

  constructor() { }

  toLoginRequestContract(email: string, password: string): LoginRequestContract {
    return new LoginRequestContract(email, password);
  }

  loginResponseContractToLoginResponseDto(
    loginResponseContract: LoginResponseContract | HttpErrorResponse,
  ): LoginResponseDto | HttpErrorResponseDto {
    if (loginResponseContract instanceof HttpErrorResponse) {
      return new HttpErrorResponseDto(
        loginResponseContract.error['message'],
      )
    } else {
      return new LoginResponseDto(
        loginResponseContract.message,
        loginResponseContract.user.email,
        loginResponseContract.user.username,
      );
    }
  }
}
