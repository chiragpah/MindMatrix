// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/api/v1'; // Your API base URL

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getCoursesByIds(courseIds: string[]): Observable<any> {
    const params = { courseIds: courseIds.join(',') };

    return this.http.get(`${this.baseUrl}/courses/ids`, { params });
  }
}
