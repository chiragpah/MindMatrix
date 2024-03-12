import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Course} from '../Interfaces/Course.interface'
@Injectable({
  providedIn: 'root'
})
export class CourseDescriptionService {
  private baseUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getParticularCourseData(id:string):Observable<Course>{
    const url=`${this.baseUrl}/api/v1/get-course/${id}`;
   return this.http.get<Course>(url);
   
   
    
    
  }
}
