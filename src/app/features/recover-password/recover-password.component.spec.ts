import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RecoverPasswordComponent } from './recover-password.component';

describe('RecoverPasswordComponent', () => {
  let recoverPasswordComponent: RecoverPasswordComponent;
  let fixture: ComponentFixture<RecoverPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPasswordComponent],
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
    fixture = TestBed.createComponent(RecoverPasswordComponent);
    recoverPasswordComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(recoverPasswordComponent).toBeTruthy();
  });

  it('registerUser - deve enviar link de recuperação de senha se o email for preenchido corretamente', () => {

    const logSpy = spyOn(console, 'log');

    recoverPasswordComponent.recoverPasswordForm = recoverPasswordComponent['_buildRecoverPasswordForm']();

    recoverPasswordComponent.recoverPasswordForm.controls['email'].setValue('email@email.com');

    recoverPasswordComponent.sendLinktoEmail();

    expect(logSpy).toHaveBeenCalled();
  });

  it('registerUser - não deve enviar link de recuperação de senha se o email não for preenchido', () => {

    const logSpy = spyOn(console, 'log');

    recoverPasswordComponent.recoverPasswordForm = recoverPasswordComponent['_buildRecoverPasswordForm']();

    recoverPasswordComponent.recoverPasswordForm.controls['email'].setValue('');

    recoverPasswordComponent.sendLinktoEmail();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('registerUser - não deve enviar link de recuperação de senha se o email estiver inválido', () => {

    const logSpy = spyOn(console, 'log');

    recoverPasswordComponent.recoverPasswordForm.controls['email'].setValue('email@email');

    recoverPasswordComponent.sendLinktoEmail();

    expect(logSpy).not.toHaveBeenCalled();
  });
});
