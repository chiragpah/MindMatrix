import { Component, Input,OnInit } from '@angular/core';
import { CoursePageService } from '../../../services/course-page.service';


@Component({
  selector: 'top-rated-course',
  templateUrl: './top-rated-course.component.html',
  styleUrl: './top-rated-course.component.css'
})
export class TopRatedCourseComponent {
  course:any;
 @Input() searchedText:any;
  constructor(private CourseContent:CoursePageService){}
  ngOnInit():void{
   this.CourseContent.getAllCourseData().subscribe(data=>{
    this.course=data.courses;
      console.log(this.course.length,"CoursePage Component"); 
   })
   

 
  // @Input() searchedText:any;
  // ngOnInit(){
  //   console.log("this searched text is "+this.searchedText);
    
  // }
}
}