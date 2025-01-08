import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';

import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response-dto';
import { LoginResponseContract } from '../../../../shared/contracts/login/response/login-response-contract';

@Injectable()
export class LoginFacadeService {

  constructor(
    private readonly loginProxyService: LoginProxyService,
    private readonly loginAdapterService: LoginAdapterService,
  ) { }

  login(
    email: string,
    password: string,
  ): Observable<LoginResponseDto> {
    return this.loginProxyService.login(
      this.loginAdapterService.toLoginRequestContract(email, password)
    ).pipe(
      map((loginResponseContract: LoginResponseContract) => this.loginAdapterService.toLoginResponseDto(loginResponseContract)),
      catchError((httpErrorResponse: HttpErrorResponse) => throwError(() => this.loginAdapterService.toLoginErrorResponseDto(httpErrorResponse))),
    );
  }
}
