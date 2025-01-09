import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hc-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  private _patternEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  public recoverPasswordForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.recoverPasswordForm = this._buildRecoverPasswordForm();
  }

  private _buildRecoverPasswordForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this._patternEmail)]]
    });
  }

  public sendLinktoEmail(): void {
    if (this.recoverPasswordForm.valid) {
      console.log('send email');
    }
  }

}
