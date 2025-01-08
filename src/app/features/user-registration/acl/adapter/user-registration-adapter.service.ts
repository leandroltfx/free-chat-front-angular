import { Injectable } from '@angular/core';

import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response-dto';
import { UserRegistrationRequestContract } from '../../../../shared/contracts/user-registration/request/user-registration-request-contract';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/user-registration/response/user-registration-response-contract';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRegistrationErrorResponseDto } from 'src/app/shared/dto/user-registration/error/user-registration-error-response-dto';

@Injectable()
export class UserRegistrationAdapterService {

  constructor() { }

  toUserRegistrationRequestContract(
    username: string,
    email: string,
    password: string,
  ): UserRegistrationRequestContract {
    return new UserRegistrationRequestContract(
      username,
      email,
      password,
    );
  }

  toUserRegistrationResponseDto(
    userRegistrationResponseContract: UserRegistrationResponseContract
  ): UserRegistrationResponseDto {
    return new UserRegistrationResponseDto(
      userRegistrationResponseContract.message,
      userRegistrationResponseContract.user.email,
      userRegistrationResponseContract.user.username,
    );
  }

  toLoginErrorResponseDto(
    httpErrorResponse: HttpErrorResponse
  ): UserRegistrationErrorResponseDto {
    return new UserRegistrationErrorResponseDto(
      httpErrorResponse.error['message'],
    )
  }
}
