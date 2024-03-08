import { Component, OnInit,Input } from '@angular/core';
import{CourseDescriptionService} from'../../../services/course-description.service'
import { Course } from '../../../Interfaces/Course.interface'; 
import { log } from 'console';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { response } from 'express';
@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent implements OnInit {
  course!: Course ;
   sumOfVideoLength=0;
   timeOfCompletion:string='';
   ID!:any;
  userData!:any;
  showPlay:boolean=false;
  showPrice:boolean=true;
 constructor(private CourseContent:CourseDescriptionService,private route: ActivatedRoute,private user:UserService ){}
 userPurchaseCheck(id:any){
    this.user.getUser().subscribe(response=>{
      
      this.userData=response.user.courses;
      console.log( this.userData);
      
      for(const courseID of this.userData)
      {
        if(courseID['_id']==id){
          console.log("success",courseID['_id']);
          this.showPlay=true;
          this.showPrice=false;

        }
      }
   })
 }
 ngOnInit():void{
  this.ID = this.route.snapshot.paramMap.get('id');
  console.log('ID:', this.ID);
  
  

   this.CourseContent.getParticularCourseData(this.ID).subscribe(data=>{
    this.course=data;
     console.log(this.course);
     this.userPurchaseCheck(this.course.course._id);
  //   for(const data of this.course.course.courseData){
  //     this.sumOfVideoLength+= data.videoLength;
  //   }
  //   const totalMinutes = Math.floor(this.sumOfVideoLength);
  //   const hours = Math.floor(totalMinutes / 60);
  //   const minutes = totalMinutes % 60;
  //   this.timeOfCompletion="Length: "+hours+" hours "+minutes+" minutes"
    
  
  
  })
 }
 @Input() items:any;
  

  url:string='';
 generateRange(n:number):number[]{
  console.log(n);
  
  return Array.from({length:n},(_,i)=>i+1)
 }

}
