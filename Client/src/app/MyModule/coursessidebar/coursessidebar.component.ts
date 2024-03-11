import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-coursessidebar',
  templateUrl: './coursessidebar.component.html',
  styleUrl: '../courseplayer/courseplayer.component.css'
})
export class CoursessidebarComponent {
  @Input() courseList:any;
}
