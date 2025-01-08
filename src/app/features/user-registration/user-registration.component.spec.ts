import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,

        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
      ]
    });
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('_buildUserRegistrationForm - deve montar o formulário para cadastro de usuário', () => {

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    expect(component.userRegistrationForm.controls['username']).toBeDefined();
    expect(component.userRegistrationForm.controls['email']).toBeDefined();
    expect(component.userRegistrationForm.controls['password']).toBeDefined();
    expect(component.userRegistrationForm.controls['confirmPassword']).toBeDefined();
  });

  it('registerUser - deve seguir o fluxo para cadastro de usuário se o formulário estiver válido', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).toHaveBeenCalledWith('register user');
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o nome de usuário não for preenchido', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o nome de usuário estiver com espaços', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('admin admin');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o nome de usuário estiver com menos de 3 caracteres', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('us');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o nome de usuário estiver com mais de 30 caracteres', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('adminadminadminadminadminadminx');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o email estiver com mais de 254 caracteres', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('emailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemail@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o email não for preenchido', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se o email estiver inválido', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email');
    component.userRegistrationForm.controls['password'].setValue('abc123abc');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se a senha não for preenchida', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('');
    component.userRegistrationForm.controls['confirmPassword'].setValue('asd123asd');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se a senha estiver com menos de 8 caracteres', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc1234');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc1234');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se a senha estiver com mais de 64 caracteres', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc123abc1abc123abc1abc123abc1abc123abc1abc123abc1abc123abc1abc123');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc123abc1abc123abc1abc123abc1abc123abc1abc123abc1abc123abc1abc123');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se a confirmação de senha não for preenchida', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc12345');
    component.userRegistrationForm.controls['confirmPassword'].setValue('');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve seguir o fluxo para cadastro de usuário se a confirmação de senha estiver diferente da senha', () => {

    const logSpy = spyOn(console, 'log');

    component.userRegistrationForm = component['_buildUserRegistrationForm']();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('abc12345');
    component.userRegistrationForm.controls['confirmPassword'].setValue('abc12347');

    component.registerUser();

    expect(logSpy).not.toHaveBeenCalled();
  });
});
