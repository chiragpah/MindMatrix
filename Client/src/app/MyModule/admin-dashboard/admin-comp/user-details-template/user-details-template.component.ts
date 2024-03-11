import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details-template',
  templateUrl: './user-details-template.component.html',
  styleUrl: './user-details-template.component.css'
})
export class UserDetailsTemplateComponent {
  // displayedColumns: string[] = ['name', 'email', 'role', 'status'];
  displayedColumns: any;
  @Input() user: any;
  ngDoCheck(){
    console.log("this user ",this.user.name);
    
    
  }
}
