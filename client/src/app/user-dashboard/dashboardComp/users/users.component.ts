import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service'; // Adjust the path

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersres: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
    console.log('we got the users' + this.usersres);
  }

  fetchAllUsers(): void {
    this.adminService.getAllUser().subscribe(
      (users) => {
        this.usersres = users;
        console.log('we got the users', this.usersres.users); // Log here
        this.usersres = this.usersres.users
      },
      (error) => console.error('Error fetching users:', error)
    );
  }

}