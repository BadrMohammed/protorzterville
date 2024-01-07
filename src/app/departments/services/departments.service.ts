import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiUrlGet } from 'src/app/shared/models/api.model';
import { IDepartments } from '../../departments/models/IDepartments';
@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  apiUrl = environment.apiBaseUrl;
  apiUrlGet = ApiUrlGet;

  constructor(private _http: HttpClient) {
    console.log('department service init');
  }
  getDepartments(): Observable<IDepartments> {
    return this._http.get<IDepartments>(
      this.apiUrl + this.apiUrlGet.getDepartments
    );
  }
}
