import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/shared/services/security/security.service';
import {
  ExernalAuthType,
  IExernalAuth,
  IForm,
} from 'src/app/shared/models/index.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _loginService: LoginService,
    private _securityService: SecurityService
  ) {}
  externalAuth: IExernalAuth[] = [
    { type: ExernalAuthType.Facebook, title: 'Sign up with with Facebook' },
    { type: ExernalAuthType.Google, title: 'Sign up with Google' },
  ];
  loginForm: IForm[] = [
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      placeholder: 'Example@email.com',
    },
    {
      name: 'password',
      type: 'password',
      title: 'Password',
      placeholder: 'At least 8 characters',
    },
  ];
  eventLoginForm!: FormGroup;
  errorMessage!: string;
  isSubmit = false;
  subscription!: Subscription;

  ngOnInit(): void {
    this.setFormGroup();
  }

  getErrorMessage(control: any, label?: string) {
    let requiredMessage = 'field is required';
    let invalidMessage = 'field is invalid';
    let passordLengthMessage = 'you have to enter at least 8 digit!';

    if ((control.touched || this.isSubmit) && control.invalid) {
      if (control.errors['required']) {
        return `${label} ${requiredMessage}`;
      }

      if (control.errors['minlength']['requiredLength']) {
        return passordLengthMessage;
      }
      if (control.errors['email'] || control.errors['pattern']) {
        return `${label} ${invalidMessage}`;
      }
    }

    return null;
  }

  setFormGroup() {
    this.eventLoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onSubmit() {
    this.isSubmit = true;
    if (this.eventLoginForm.valid) {
      const formData = this.eventLoginForm.value;
      const returnUrl = this.activatedRoute.snapshot.queryParams['returnURL'];
      this.subscription = this._loginService.login(formData).subscribe({
        next: (res) => {
          if (res.status === 200) {
            this._securityService.setLocalStorage('token', res.token);
            this._securityService.setLocalStorage(
              'userData',
              JSON.stringify(res)
            );

            if (returnUrl) {
              this.router.navigateByUrl(returnUrl);
            } else {
              this.router.navigate(['/']);
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });

      console.log(this.eventLoginForm);
    }
  }
}
