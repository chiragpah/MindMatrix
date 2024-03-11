import { Component } from '@angular/core';
import { AdminService } from '../../../../Services/admin/admin.service';
import { CourseDescriptionComponent } from '../../../course-description/course-description.component';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent {
  coursesres: any;;

  // Inject the CourseService in the constructor
  constructor(private courseService: AdminService) {}

  ngOnInit(): void {
    // Call the getAllCourses function from the service
    console.log("we are inside the courser service")
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.coursesres = courses;
        console.log('Courses:', this.coursesres.courses);
        this.coursesres= this.coursesres.courses
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }


  deleteCourse(courseId: string): void {
    console.log("the id is "+courseId)
    this.courseService.deleteCourseById(courseId).subscribe(
      () => {
        console.log('Course deleted successfully!');
        // Optionally, you can perform additional actions after successful deletion
      },
      (error) => {
        console.error('Error deleting course:', error);
        // Handle error as needed
      }
    );
  }
}
