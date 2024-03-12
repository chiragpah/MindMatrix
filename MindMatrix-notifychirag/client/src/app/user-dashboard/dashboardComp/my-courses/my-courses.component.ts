import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { CourseService } from '../../../../../services/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  userData: any;
  userCourses: any[] = [];
  courseDetails: any[] = []; // Array to store course details

  constructor(private userService: UserService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.userData = data;
        this.userCourses = data.user.courses;
        this.loadCourseDetails(); // Call the method to load course details
        console.log("User Courses:", this.userCourses);
        console.log("User Data:", data); // Log the actual user data object
      },
      error: (error) => console.error(error)
    });
  }

  loadCourseDetails(): void {
    this.courseService.getCoursesByIds(this.userCourses).subscribe({
      next: (courseDetails) => {
        this.courseDetails = courseDetails;
        console.log('Course Details:', this.courseDetails);
      },
      error: (error) => console.error(error)
    });
  }
}
