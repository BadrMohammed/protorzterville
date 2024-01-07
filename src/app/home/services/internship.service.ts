import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiUrlGet } from 'src/app/shared/models/api.model';
import { IInternship } from '../models/IInternship';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  apiUrl = environment.apiBaseUrl;
  apiUrlGet = ApiUrlGet;

  constructor(private _http: HttpClient) {
    console.log('internship service init');
  }

  getInternships(): Observable<IInternship> {
    return this._http.get<IInternship>(
      this.apiUrl + this.apiUrlGet.getInternships
    );
  }
}
