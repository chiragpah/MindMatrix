import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CourseUploadService {
  private baseUrl = 'http://localhost:3000/api/v1/create-course';
  // private cookieValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3ZGUwYTU4YzVlMjRmODkyNzVmMSIsImlhdCI6MTcwOTgwMDc4MywiZXhwIjoxNzA5ODg3MTgzfQ.7ncBFQJX2ZmyzSiU7VHFrD-52hBOPS5SusCMToxx2oo"
  constructor(private http: HttpClient,private cookieService:CookieService) { }
  cookieValue = this.cookieService.get('access_token');

  uploadCourse(formData: FormData): Observable<any> {
    console.log("in service");
    
    const headers = new HttpHeaders({
      'access_token': this.cookieValue
    });
    const options = { headers: headers };
    return this.http.post(this.baseUrl, formData, options);
  }
}
