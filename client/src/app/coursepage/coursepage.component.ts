import { Component } from '@angular/core';
import { CoursePageService } from '../../../services/course-page.service';
@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrl: './coursepage.component.css'
})
export class CoursepageComponent {
  course:any;
  constructor(private CourseContent:CoursePageService){}
  ngOnInit():void{
   this.CourseContent.getAllCourseData().subscribe(data=>{
    this.course=data.courses;
      console.log(this.course.length,"home Component"); 
   })
  }
   
}
