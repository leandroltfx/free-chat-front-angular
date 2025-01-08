import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError } from 'rxjs';

import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response-dto';
import { HttpErrorResponseDto } from '../../../../shared/dto/error/http-error-response-dto';

@Injectable()
export class LoginFacadeService {

  constructor(
    private readonly loginProxyService: LoginProxyService,
    private readonly loginAdapterService: LoginAdapterService,
  ) { }

  login(
    email: string,
    password: string,
  ): Observable<LoginResponseDto | HttpErrorResponseDto> {
    return this.loginProxyService.login(
      this.loginAdapterService.toLoginRequestContract(email, password)
    ).pipe(
      map(loginResponseContract => this.loginAdapterService.loginResponseContractToDto(loginResponseContract)),
      catchError(loginResponseError => throwError(() => this.loginAdapterService.loginResponseContractToDto(loginResponseError))),
    );
  }
}
