
import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
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
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from '../../../Services/notification/notification.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
  })
  export class SidebarComponent  {
  faDashboard = faDashboard;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
  faBook = faBook;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faBell = faBell;
  constructor(private notificationService: NotificationService) {}
  
  newNotificationsCount = 0;

  @Output() gettheComp = new EventEmitter<number>();
  showComponent(value:number) {
    console.log("we got the comp as "+value)
    this.gettheComp.emit(value);

  }
  
  notifications: any;
  ngDoCheck(){
    this.fetchNotifications();
  }
  fetchNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (response) => {
        // console.log('Data received from server:');
        // console.log(JSON.stringify(response, null, 2));
        this.notifications = response;
        this.notifications=this.notifications.notifications
        // console.log('The notifications are:', this.notifications.length);
        this.newNotificationsCount=this.notifications.length
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }
  // @Input() notifyCount:number=0;
  // toggleNotifications() {
  //   // Logic to display or hide the notifications
  //   console.log('Notifications clicked');
  //   // Reset the notification count when viewed
  //   this.newNotificationsCount = 0;
  // }
}
