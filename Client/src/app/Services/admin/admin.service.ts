import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = "http://localhost:3000/api/v1";
  // http://localhost:3000/api/v1/get-admin-courses
  constructor(private http: HttpClient,private cookieService:CookieService) { }

  getAllUsers(): Observable<any[]> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    // Adjust the endpoint as needed based on your API
    return this.http.get<any[]>(`${this.apiUrl}/get-users`, { headers });
  }


  getAllCourses(): Observable<any[]> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });

    // Make a GET request to the API endpoint
    return this.http.get<any[]>(`${this.apiUrl}/get-admin-courses`, { headers });
  }
  // http://localhost:3000/api/v1/delete-course/65e45b947c5c325ef46bbe79
  deleteCourseById(courseId: string): Observable<void> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
   
    return this.http.delete<void>(`${this.apiUrl}/delete-course/${courseId}`,{headers});
  }
}