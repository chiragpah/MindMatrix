import { Component,ViewChild,ElementRef} from '@angular/core';
import { CoursePageService } from '../../../services/course-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  course:any;
  @ViewChild('searchInput') paraE1!: ElementRef;
  searchval: string = '';

  constructor(private CourseContent:CoursePageService,private router: Router){}
  ngOnInit():void{
   this.CourseContent.getAllCourseData().subscribe(data=>{
    this.course=data.courses;
      console.log(this.course.length,"CoursePage Component"); 
   })
   
  }

  onsearchedClick() {
    console.log("the value searched is " + this.paraE1.nativeElement.value);
    this.searchval = this.paraE1.nativeElement.value;
    
  }
  // navigateToDescriptionPage(cardId: number) {
  //   console.log(cardId);
    
  //    this.router.navigate(['/courseDetails',cardId]);
  // }
}
