import { Component, Input } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.css']
})
export class NotificationTemplateComponent {
  @Input() notification_sent: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // console.log(this.notification_sent);
  }
  notifications: any;
  deleteNotification(notificationId: string): void {
    this.notificationService.deleteNotification(notificationId).subscribe(
      response => {
        console.log('Notification deleted successfully:', response);
        // Handle any UI update or notification removal logic here
      },
      error => {
        console.error('Error deleting notification:', error);
        // Handle error, display a message, etc.
      }
    );
  }


  
  fetchNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (response) => {
        console.log('Data received from server:');
        console.log(JSON.stringify(response, null, 2));
        this.notifications = response;
        this.notifications = this.notifications.notifications
        console.log('The notifications are:', this.notifications.length);
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }
}