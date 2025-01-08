import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';

import { UserRegistrationRequestContract } from '../../../../shared/contracts/user-registration/request/user-registration-request-contract';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/user-registration/response/user-registration-response-contract';

@Injectable()
export class UserRegistrationProxyService {

  private basePathBackMockoon: string = 'http://localhost:3000';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  registerUser(
    userRegistrationRequestContract: UserRegistrationRequestContract
  ): Observable<UserRegistrationResponseContract> {
    return this.httpClient.post<UserRegistrationResponseContract>(
      `${this.basePathBackMockoon}/user`,
      userRegistrationRequestContract
    ).pipe(
      map(userRegistrationResponseContract => userRegistrationResponseContract),
      catchError(userRegistrationErrorResponse => throwError(() => userRegistrationErrorResponse)),
    );
  }
}
