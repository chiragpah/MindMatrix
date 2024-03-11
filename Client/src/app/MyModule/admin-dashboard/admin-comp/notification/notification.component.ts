import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../Services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent   {
  constructor(private notificationService: NotificationService) {}

  notifications: any;

  ngOnInit() {
    this.fetchNotifications();
  }
  // ngDoCheck() {
  //   this.fetchNotifications();
  // }

  fetchNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (response) => {
        console.log('Data received from server:');
        console.log(JSON.stringify(response, null, 2));
        this.notifications = response;
        this.notifications=this.notifications.notifications
        console.log('The notifications are:', this.notifications.length);
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }
}
