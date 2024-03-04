import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { StoreService } from '../../Services/store.service';
import { Course } from '../../types/course.type';
import {Subscription} from  'rxjs';
import { User } from '../../types/user.type';
import { InstructorApiService } from '../../Services/api/instructor-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {
  user:User|null=null;
  courses!:Course[];
  userSubscription!: Subscription;
  constructor( private storeService:StoreService,private instructorApiService:InstructorApiService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit() {
    this.userSubscription = this.storeService.loggedInUser$.subscribe({
      next:(data)=>{
        if (data !== null) {
          this.user = data;
          // Proceed with handling non-null data
        } else {
          // Handle null case appropriately
          // For example, clear the user data or show an error message
          this.user = null;
          // You can also throw an error or log a message
         // console.error('Null user data received from loggedInUser$');
        }
      },
      error:()=>{}
    });
    if (this.user !== null) {
      this.instructorApiService.getCourses(this.user.email).subscribe({
        next: (data) => {
          this.courses = data.courses;
          // console.log(this.courses)
        },
        error: (err) => {
          // Handle error if needed
        }
      });
    } else {
      // Handle null case appropriately
      // For example, show an error message or handle the absence of user data
      console.error("User data is null");
    }
    
  }
  redirectToAddCourse(){
    this.router.navigate(['add-course'],{relativeTo:this.activatedRoute})
  }
}
