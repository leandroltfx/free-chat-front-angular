import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';

import { LoginRequestContract } from '../../../../shared/contracts/login/request/login-request-contract';
import { LoginResponseContract } from '../../../../shared/contracts/login/response/login-response-contract';

@Injectable()
export class LoginProxyService {

  private basePathBackMockoon: string = 'http://localhost:3000';

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  login(
    loginRequestContract: LoginRequestContract,
  ): Observable<LoginResponseContract | HttpErrorResponse> {
    return this.httpClient.post<LoginResponseContract | any>(
      `${this.basePathBackMockoon}/login`,
      loginRequestContract
    ).pipe(
      map(loginResponseContract => loginResponseContract),
      catchError(loginResponseError => throwError(() => {
        console.log(loginResponseError);
        return loginResponseError;
      })),
    );
  }
}
