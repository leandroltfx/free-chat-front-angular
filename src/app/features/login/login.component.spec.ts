import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve fazer login se o formulário estiver preenchido', () => {

    const logSpy = spyOn(console, 'log');

    component.loginForm = component.buildLoginForm();

    component.loginForm.controls['email'].setValue('email@email.com');
    component.loginForm.controls['password'].setValue('password');

    component.login();

    expect(logSpy).toHaveBeenCalledWith('login');
  });

  it('não deve fazer login se não preencher o email', () => {

    const logSpy = spyOn(console, 'log');

    component.loginForm = component.buildLoginForm();

    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('password');

    component.login();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('não deve fazer login se não preencher a senha', () => {

    const logSpy = spyOn(console, 'log');

    component.loginForm = component.buildLoginForm();

    component.loginForm.controls['email'].setValue('email@email.com');
    component.loginForm.controls['password'].setValue('');

    component.login();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('não deve fazer login se não preencher o formulário', () => {

    const logSpy = spyOn(console, 'log');

    component.loginForm = component.buildLoginForm();

    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');

    component.login();

    expect(logSpy).not.toHaveBeenCalled();
  });
});
