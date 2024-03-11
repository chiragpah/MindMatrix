import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  cookieValue = this.cookieService.get('access_token');


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    access_token: `${this.cookieValue}`,
  });

  getAllUser(): Observable<any> {
    console.log('the cookie value is ' + this.cookieValue);
    return this.http.get(`${this.apiUrl}/get-users`, { headers: this.headers });
  }


  getAllCourse(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-admin-courses`, { headers: this.headers });
  }
  getAllOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-orders`, { headers: this.headers });
  }

  getAllUserData(): Observable<{ last12Months: any }> {
    return this.http.get<{ last12Months: any }>(`${this.apiUrl}/get-users-analytics`, { headers: this.headers });
  }


  deleteCourseById(courseId: string): Observable<void> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });

    return this.http.delete<void>(`${this.apiUrl}/delete-course/${courseId}`, { headers });
  }
}

