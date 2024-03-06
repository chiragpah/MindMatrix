import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Module } from '../types/module.type';
import { User } from '../types/user.type';
//import { AuthService } from './api/auth-api.service';
import { Router } from '@angular/router';
import { CourseApiService } from './api/course-api.service';
import { ApiService } from './api.service';
import { InstructorApiService } from './api/instructor-api.service';
import { CourseData } from '../types/course.type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  user: any = null;
  role!: string|null;
  loggedInUser$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  courseData: CourseData = {
    name: '',
    description: '',
    thumbnail: '',
    trailer: '',
    price: 0,
    difficulty: 'beginner',
    modules: [],
    tags: [],
    _id:''
  };
  constructor(
    //private authAPi: AuthService,
    private apiService: ApiService,
    private router: Router,
    private courseApi: CourseApiService,
    private instructorApis:InstructorApiService
  ) {}
  
  // setExp(exp:any){
  //   this.user.exp = exp;
  //   localStorage.setItem('user',JSON.stringify(this.user));
  //   this.loggedInUser$.next({ ...this.user, role: this.role });
  // }
  // autoLogin() {
  //   let userstr = localStorage.getItem('user');
  //   let user: User | null = null;
  //   if (userstr !== null) {
  //     user = JSON.parse(userstr) as User;
  //   }
  //   let role = localStorage.getItem('role');
  //   this.user = user;
  //   if (role == 'student' || role == 'instructor') this.role = role;
  //   // console.log('AUTOLOGIN', this.user,userstr);
  //   if (this.user) {
  //     this.loggedInUser$.next({ ...this.user, role: this.role });
  //   } else {
  //     this.loggedInUser$.next(null);
  //   }
  // }
  setPrimaryCourseData(data: {
    name: string;
    description: string;
    thumbnail: string;
    trailer: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    price: number;
    tags: string[];
    _id?:string
  }) {
    console.log(data);
    this.courseData.name = data.name;
    this.courseData.description = data.description;
    this.courseData.thumbnail = data.thumbnail;
    this.courseData.trailer = data.trailer;
    this.courseData.difficulty = data.difficulty;
    this.courseData.price = data.price;
    this.courseData.tags = data.tags;
    this.courseData._id=data?._id ? data?._id:"";
  }

  addModule(data: Module) {
    // this.courseData.modules = [...this.courseData.modules, data];
    this.courseData.modules.push(data);
    console.log(data);

  }
  getStudentCourse(courseid: string) {
    return this.apiService.getStudentCourse(this.user._id, courseid);
  }
  getInstructorCourse(courseid: string) {
    return this.instructorApis.getCoursebyId(this.user._id, courseid);
  }
  deleteCourse(courseid: string) {
    if(this.role=='instructor'){
      return this.instructorApis.deleteCourse(this.user._id, courseid);
    }
   else{
    return null;
   }
  }
  addCourse() {
    return this.courseApi.addCourse(this.courseData, [this.user._id]).pipe(
      tap((data) => {
        this.resetCourse();
      })
    );
  }
  editCourse() {
    return this.courseApi.editCourse(this.courseData, [this.user._id]).pipe(
      tap((data) => {
        this.resetCourse();
      })
    );
  }
  addDraftCourse() {
    return this.courseApi.addDraftCourse(this.courseData, [this.user._id]).pipe(
      tap((data) => {
        this.resetCourse();
      })
    );
  }
  resetCourse() {
    this.courseData = {
      name: '',
      description: '',
      thumbnail: '',
      trailer: '',
      price: 0,
      difficulty: 'beginner',
      modules: [],
      tags: [],
    };
  }
}
