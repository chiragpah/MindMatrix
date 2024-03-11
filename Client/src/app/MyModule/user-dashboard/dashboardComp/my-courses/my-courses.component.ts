import { Component ,OnInit} from '@angular/core';
import { UserService } from '../../../../Services/user/user.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {
  constructor( private userService: UserService){}
  ngOnInit(){
      this.userService.getUser().subscribe({
        next: (data) => {
         console.log(data)
        },
        error: (error) => console.error(error)
      });
    
  }
}
