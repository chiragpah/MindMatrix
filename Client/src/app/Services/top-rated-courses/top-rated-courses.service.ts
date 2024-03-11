// top-rated-courses.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopRatedCoursesService {
  private apiUrl = 'https://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getTopRatedCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/courses");
  }
}
