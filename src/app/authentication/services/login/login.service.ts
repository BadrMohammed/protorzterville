import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import convertObjToQueryString from '../../../../utils/object-to-query';
import { ApiUrlGet } from '../../../shared/models/api.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = environment.apiBaseUrl;
  apiurlGet = ApiUrlGet;

  constructor(private _http: HttpClient) {
    console.log('login service init');
  }

  login(body: any): Observable<any> {
    return this._http.get(
      this.apiUrl + this.apiurlGet.login + convertObjToQueryString(body)
    );
  }

  logout() {
    localStorage.clear();
  }

  unauthLogin(email: string, password: string) {
    return this._http.get(
      this.apiUrl +
        this.apiurlGet.unauthLogin +
        convertObjToQueryString({ email, password })
    );
  }
}
