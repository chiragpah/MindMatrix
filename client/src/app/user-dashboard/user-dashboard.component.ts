import { Component, OnInit } from '@angular/core';
// import { MyaccountComponent } from './dashboardComp/myaccount/myaccount.component';
import { Router } from '@angular/router';
// import { UserService } from '../../Services/user/user.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      console.log(data.user.role);
      
      this.checkAdmin(data.user.role);
      
    })
  }
  checkAdmin(role:string){
    if(role=='admin')
    this.showAdmin=true;
    
  }
  currentComponent: number = 1;
  showAdmin:boolean=false;

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
  gotoAdminPage(){
    this.router.navigate(['/AdminDashboard']);
  }
}
