import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';
import { CoursePageService } from '../../Services/Course-page/course-page.service';
@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrl: './coursepage.component.css'
})
export class CoursepageComponent implements AfterViewInit{
  course:any;
  buttons = [0, 1, 2, 3];
  isClicked: boolean[] = [false, false, false, false];
  currentTag:string='static';
  filterCourse:any;
  tags: string[] = [];
  commonTags: string[] = ['Backend', 'FrontEnd', 'Javascript']; 
  constructor(private CourseContent:CoursePageService){}
  ngAfterViewInit(): void {
    // this.first.nativeElement.classList.add('clicked');
     this.displayAll()
  }
  ngOnInit():void{
   this.CourseContent.getAllCourseData().subscribe(data=>{
    this.course=data.courses;
      console.log(this.course.length,"home Component"); 
       this.getTopics();
       this.displayAll()
   })
  }
  getTopics() {
    this.course.forEach((course: { tags: any; }) => {
      if (!this.tags.includes(course.tags)) {
        this.tags.push(course.tags);
      }
    });
  }
  applyTopicFilter(tag: string,i:number) {
    this.changeTag(tag);
    this.filterCourse = this.course.filter((course: { tags: string; }) => {
        // Ensure course.tags is a string before applying toLowerCase()
        if (typeof course.tags === 'string') {
            return course.tags.toLowerCase() === tag.toLowerCase();
        }
        return false; // If course.tags is not a string, exclude it from the filtered results
    });
  
    console.log(this.filterCourse);
}
displayAll(){
  this.changeTag("static");
  this.filterCourse=  this.course;
}
changeTag(tag:string){
  this.currentTag=tag;
}

}
