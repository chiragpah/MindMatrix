// // course.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Course } from '../services/course.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {
//   private coursesUrl = 'http://localhost:3000/api/courses'; // Replace with your backend API URL

//   constructor(private http: HttpClient) { }

//   getCourses(): Observable<Course[]> {
//     return this.http.get<Course[]>(this.coursesUrl);
//   }
// }
