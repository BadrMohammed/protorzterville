import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from '../models/INews.model';
import { environment } from 'src/environments/environment';
import { ApiUrlGet } from 'src/app/shared/models/api.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

// @Injectable({})
export class NewsService {
  apiUrl = environment.apiBaseUrl;
  ApiUrlGet = ApiUrlGet;
  constructor(private _http: HttpClient) {
    console.log('news service init');
  }

  getNews(): Observable<INews[]> {
    return this._http.get<INews[]>(this.apiUrl + this.ApiUrlGet.getNews);
  }

  getLatestNews(): Observable<INews[]> {
    return this._http.get<INews[]>(this.apiUrl + this.ApiUrlGet.getLatestNews);
  }

  getNewById(newId: any): Observable<INews> {
    return this._http.get<INews>(
      `${this.apiUrl}${this.ApiUrlGet.getNewById}?id=${newId}`
    );
  }
}
