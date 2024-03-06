import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-coursesidebar',
  templateUrl: './coursesidebar.component.html',
  styleUrl: '../courseplayer/courseplayer.component.css'
})
export class CoursesidebarComponent {
  @Input() courseList:any;
}
