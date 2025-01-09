import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';

import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response-dto';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/user-registration/response/user-registration-response-contract';

@Injectable()
export class UserRegistrationFacadeService {

  constructor(
    private readonly userRegistrationProxyService: UserRegistrationProxyService,
    private readonly userRegistrationAdapterService: UserRegistrationAdapterService,
  ) { }

  registerUser(
    username: string,
    email: string,
    password: string,
  ): Observable<UserRegistrationResponseDto> {
    return this.userRegistrationProxyService.registerUser(
      this.userRegistrationAdapterService.toUserRegistrationRequestContract(username, email, password)
    ).pipe(
      map((userRegistrationResponseContract: UserRegistrationResponseContract) => this.userRegistrationAdapterService.toUserRegistrationResponseDto(userRegistrationResponseContract)),
      catchError((httpErrorResponse: HttpErrorResponse) => throwError(() => this.userRegistrationAdapterService.toUserRegistrationErrorResponseDto(httpErrorResponse))),
    );
  }
}
