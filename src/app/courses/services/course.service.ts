import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourses } from '../models/ICourses.model';
import { environment } from 'src/environments/environment';
import { ApiUrlGet } from 'src/app/shared/models/api.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  apiUrl = environment.apiBaseUrl;
  apiUrlGet = ApiUrlGet;

  constructor(private _http: HttpClient) {
    console.log('courses service init');
  }

  getCourseDetails(courseId: any): Observable<ICourses> {
    return this._http.get<ICourses>(
      `${this.apiUrl}${this.apiUrlGet.getCourseById}?id=${courseId}`
    );
  }

  getLatestCourse(): Observable<ICourses[]> {
    return this._http.get<ICourses[]>(
      this.apiUrl + this.apiUrlGet.getLatestCourse
    );
  }
}
