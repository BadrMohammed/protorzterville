import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiUrlGet } from 'src/app/shared/models/api.model';
import { ICarousel } from '../models/ICarousel.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiUrl = environment.apiBaseUrl;
  apiUrlGet = ApiUrlGet;

  constructor(private _http: HttpClient) {
    console.log('home service init');
  }

  getCarousel(): Observable<ICarousel[]> {
    return this._http.get<ICarousel[]>(
      this.apiUrl + this.apiUrlGet.getCarousel
    );
  }
}
