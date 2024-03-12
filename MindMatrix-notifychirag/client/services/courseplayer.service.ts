import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CourseplayerService {
  // cookieValue="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3ZGUwYTU4YzVlMjRmODkyNzVmMSIsImlhdCI6MTcwOTQ3NTQ5MywiZXhwIjoxNzA5NTYxODkzfQ.r2N5Xid9TZDavQgbdOI6fThS6eemnWbJ7AVscGkUIh8"

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  cookieValue = this.cookieService.get('access_token');
  getParticularCourseData(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.cookieValue}`
    });
    const url = `${this.baseUrl}/api/v1/get-course-content/${id}`;
    return this.http.get<any>(url, { headers: headers });
  }
}
