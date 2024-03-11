import { Component } from '@angular/core';

import { SocketService } from '../../../../../services/socket.service';
import { NotificationService } from '../../../../../services/notification.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(
    private socketService: SocketService,
    private notificationService: NotificationService
  ) { }
  currentComponent: number = 1;
  gottheComp(comp: any) {
    this.currentComponent = comp;
    console.log('we got the comp as ' + this.currentComponent);
  }


  title: any;
  message: any;
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
