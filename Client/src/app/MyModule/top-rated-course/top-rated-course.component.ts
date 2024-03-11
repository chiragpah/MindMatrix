import { Component, Input,OnInit } from '@angular/core';
import { CoursePageService } from '../../Services/Course-page/course-page.service';

@Component({
  selector: 'top-rated-course',
  templateUrl: './top-rated-course.component.html',
  styleUrl: './top-rated-course.component.css'
})
export class TopRatedCourseComponent {
  constructor(private coursePageService: CoursePageService) {}
  courses: any;
  ngOnInit() {
    // Load top-rated courses when the component initializes
    this.fetchTopRatedCourses();
  }

  fetchTopRatedCourses() {
    this.coursePageService.getAllCourseData().subscribe(
      (courses: any) => {
        // Handle the response, update your component's state, or perform any other actions
        this.courses = courses.courses;
        console.log('Top-rated courses:', this.courses);
      },
      (error) => {
        console.error('Error fetching top-rated courses:', error);
        // Handle errors if needed
      }
    );
  }


  @Input() searchedText:string='';
  // ngOnInit(){
  //   console.log("this searched text is "+this.searchedText);
    
  // }
}
