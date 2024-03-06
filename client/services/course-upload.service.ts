import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseUploadService {
  private baseUrl = 'http://localhost:3000/api/v1/create-course';
  private cookieValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3ZGUwYTU4YzVlMjRmODkyNzVmMSIsImlhdCI6MTcwOTcwMjA0OSwiZXhwIjoxNzA5Nzg4NDQ5fQ.wF9w4CZyzI6pyevXILZ6xBVVi99xjDdjZIxD-p59WZo"
  constructor(private http: HttpClient) { }

  uploadCourse(formData: FormData): Observable<any> {
    console.log("in service");
    
    const headers = new HttpHeaders({
      'access_token': this.cookieValue
    });
    const options = { headers: headers };
    return this.http.post(this.baseUrl, formData, options);
  }
}
