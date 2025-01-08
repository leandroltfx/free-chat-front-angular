import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError } from 'rxjs';

import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response-dto';

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
      map(userRegistrationResponseContract => this.userRegistrationAdapterService.toUserRegistrationResponseDto(userRegistrationResponseContract)),
      catchError(userRegistrationErrorResponse => throwError(() => this.userRegistrationAdapterService.toLoginErrorResponseDto(userRegistrationErrorResponse))),
    );
  }
}
