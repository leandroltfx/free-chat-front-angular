import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginFacadeService } from './acl/facade/login-facade.service';
import { MessageService } from '../../core/services/message/message.service';
import { LoginResponseDto } from '../../shared/dto/login/login-response-dto';
import { HttpErrorResponseDto } from '../../shared/dto/error/http-error-response-dto';

@Component({
  selector: 'hc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public hidePassword: boolean = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly loginFacadeService: LoginFacadeService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;
      this.loginFacadeService.login(
        email,
        password,
      ).subscribe(
        {
          next: loginResponseDto => {
            const loginResponse: LoginResponseDto = <LoginResponseDto>loginResponseDto;
            this.messageService.showMessage(loginResponse.message, 'success');
          },
          error: httpErrorResponseDto => {
            const loginResponseError: HttpErrorResponseDto = <HttpErrorResponseDto>httpErrorResponseDto;
            this.messageService.showMessage(loginResponseError.message, 'error');
          },
        }
      );
    }
  }

}
