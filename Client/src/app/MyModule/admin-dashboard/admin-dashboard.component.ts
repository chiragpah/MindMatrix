import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketService } from '../../Services/socket/socket.service';
import {
  faDashboard,
  faUser,
  faPlusCircle,
  faBook,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../../Services/admin/admin.service';
import { NotificationService } from '../../Services/notification/notification.service';
@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  constructor(
    private adminService: AdminService,
    private socketService: SocketService,
    private notificationService: NotificationService
  ) {}

  faDashboard = faDashboard;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
  faBook = faBook;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  @ViewChild('sidenav') sidenav: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  currentComponent: number = 1;
  gottheComp(comp: any) {
    this.currentComponent = comp;
    console.log('we got the comp as ' + this.currentComponent);
  }
  

  title:any;
  message:any;
  newNotificationsCount = 0;
  ngOnInit() {
    this.socketService.listen('newNotification').subscribe((data: any) => {
      console.log('New notification received:', data.user.event);
      this.newNotificationsCount++;
      console.log(this.newNotificationsCount)
      // Assuming data.user.event is the title and data.user.message is the message
      this.title = data.user.event;
      this.message = data.user.message;
  
      const notificationData = {
        title: this.title,
        message: this.message,
      };
  
      this.notificationService.postNotification(notificationData).subscribe(
        (response) => {
          console.log('Notification sent successfully:', response);
          // Handle success, e.g., update UI or display a success message
        },
        (error) => {
          console.error('Error sending notification:', error);
          // Handle error, e.g., display an error message
        }
      );
  
    });
  }
  
  
}
