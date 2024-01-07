import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SecurityService } from '../../services/security/security.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  token: string | null = '';

  constructor(
    private router: Router,
    private _securityService: SecurityService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.token = this._securityService.getLocalStorage('token');
    this.spinner.show();
    if (this.token) {
      request = request.clone({
        headers: new HttpHeaders({
          'access-token': this.token,
        }),
      });
    }
    return next
      .handle(request)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.spinner.hide();
          this.handleerrors(err);
          throw throwError(err);
        })
      );
  }
  handleerrors(err: HttpErrorResponse) {
    let message = '';
    if (err) {
      switch (err.status) {
        case 0:
          message = 'Connection Error';
          break;
        case 500:
          message = 'Internal Server Error';
          break;
        case 403:
          message = 'Authentication Error';
          break;
        case 401:
          message = 'Unauthorized User';
          break;
        case 403:
          message = 'Forbidden';
          break;
        case 404:
          message = 'Not Found';
          break;
        case 405:
          message = 'Method Not Allowed';
          break;
        case 409:
          message = 'Conflict';
          break;

        default:
        // message = 'Something went wrong';
      }
      // this.router.navigate(['/error']);
      this.router.navigate(['error'], {
        queryParams: { errorMessage: message },
      });
    }
  }
}
