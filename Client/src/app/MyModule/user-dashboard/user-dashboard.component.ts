import { Component } from '@angular/core';
import { MyaccountComponent } from './dashboardComp/myaccount/myaccount.component';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user/user.service';
@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(private userService: UserService, private router: Router) {}

  currentComponent: number = 1;

  showComponent(componentNumber: number): void {
    this.currentComponent = componentNumber;
  }
  logout() {
    console.log("clicked logout");
    this.userService.logOut();
    // Assuming '/login' is the route to your login page
    alert("user logged out")
    this.router.navigate(['/']);
  }
  
}
