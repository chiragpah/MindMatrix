import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
import { NotificationService } from '../../../../../services/notification.service';
import { faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  faDashboard = faDashboard;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
  faBook = faBook;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  faBell = faBell;
  constructor(private notificationService: NotificationService) { }

  newNotificationsCount = 0;

  @Output() gettheComp = new EventEmitter<number>();
  showComponent(value: number) {
    console.log("we got the comp as " + value)
    this.gettheComp.emit(value);

  }

  notifications: any;
  ngOnInit() {
    this.fetchNotifications();
  }
  fetchNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (response) => {
        // conscoole.log('Data received from server:');
        // console.log(JSON.stringify(response, null, 2));
        this.notifications = response;
        this.notifications = this.notifications.notifications
        // console.log('The notifications are:', this.notifications.length);
        this.newNotificationsCount = this.notifications.length
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }
}
