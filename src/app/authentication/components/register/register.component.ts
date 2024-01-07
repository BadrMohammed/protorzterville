import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ExernalAuthType,
  IExernalAuth,
  IForm,
} from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  externalAuth: IExernalAuth[] = [
    { type: ExernalAuthType.Facebook, title: 'Sign up with with Facebook' },
    { type: ExernalAuthType.Google, title: 'Sign up with Google' },
  ];
  isSubmit = false;
  registerForm: IForm[] = [
    {
      name: 'fullName',
      type: 'text',
      title: 'Full Name',
      placeholder: 'Your name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      placeholder: 'Example@email.com',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      title: 'Password',
      placeholder: 'At least 8 characters',
      required: true,
      min: '8',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      title: 'Confirm Password',
      placeholder: 'At least 8 characters',
      required: true,
      min: '8',
    },
  ];
  eventRegistrationForm!: FormGroup;
  errorMessage!: string;

  ngOnInit(): void {
    this.setFormGroup();
  }

  getErrorMessage(control: any, label?: string) {
    let requiredMessage = 'field is required';
    let invalidMessage = 'field is invalid';
    let passordLengthMessage = 'you have to enter at least 8 digit!';
    let nameLengthMessage = 'you have to enter at least 3 digit!';
    let passordMatchMessage =
      'Your password and confirmation password do not match.';

    if (this.isSubmit) {
      this.errorMessage = this.eventRegistrationForm.controls['confirm'].invalid
        ? 'you have to agree to the terms and conditions'
        : '';
    }
    if ((control.touched || this.isSubmit) && control.invalid) {
      if (control.errors['required']) {
        return `${label} ${requiredMessage}`;
      }
      if (control.errors['email'] || control.errors['pattern']) {
        return `${label} ${invalidMessage}`;
      }

      if (control.errors['minlength']['requiredLength']) {
        return label?.toLowerCase()?.includes('password')
          ? passordLengthMessage
          : nameLengthMessage;
      }
    }
    let passwordControl = this.eventRegistrationForm.controls['password'];
    if (
      label === 'Confirm Password' &&
      !control.invalid &&
      control.touched &&
      !passwordControl.invalid
    ) {
      if (passwordControl.value !== control.value) {
        return passordMatchMessage;
      }
    }

    return null;
  }

  setFormGroup() {
    this.eventRegistrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm: new FormControl(null, [Validators.requiredTrue]),
    });
  }
  onSubmit() {
    this.isSubmit = true;
    if (this.eventRegistrationForm.valid) {
      console.log(this.eventRegistrationForm);
    }
  }
}
