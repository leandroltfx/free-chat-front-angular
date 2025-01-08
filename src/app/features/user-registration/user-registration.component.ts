import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hc-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  private _patternEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private _patternUsername: RegExp = /^[^\s]+$/;
  private _minLengthUsername: number = 3;
  private _maxLengthUsername: number = 30;
  private _maxLengthEmail: number = 254;
  private _minLengthPassword: number = 8;
  private _maxLengthPassword: number = 64;

  public userRegistrationForm!: FormGroup;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this._buildUserRegistrationForm();
  }

  private _buildUserRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(this._patternUsername), Validators.minLength(this._minLengthUsername), Validators.maxLength(this._maxLengthUsername)]],
      email: ['', [Validators.required, Validators.pattern(this._patternEmail), Validators.maxLength(this._maxLengthEmail)]],
      password: ['', [Validators.required, Validators.minLength(this._minLengthPassword), Validators.maxLength(this._maxLengthPassword)]],
      confirmPassword: ['', [Validators.required, this._confirmationValidator]],
    });
  }

  private _confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userRegistrationForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  public updateConfirmValidator(): void {
    Promise.resolve().then(() => this.userRegistrationForm.controls['confirmPassword'].updateValueAndValidity());
  }

  public registerUser(): void {
    if (this.userRegistrationForm.valid) {
      console.log('register user');
    }
  }

}
