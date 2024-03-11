import { Component,Input,Output,EventEmitter } from '@angular/core';
import log from 'video.js/dist/types/utils/log';

@Component({
  selector: 'app-course-display-template',
  templateUrl: './course-display-template.component.html',
  styleUrl: './course-display-template.component.css'
})
export class CourseDisplayTemplateComponent {
  displayedColumns: any;
  @Input() course: any;
  

  @Output() deleteCourseClicked = new EventEmitter<string>();

  gettheId(id: string): void {
    console.log(this.course.thumbnail.url);
    
    // Emit the event with the course ID when the delete button is clicked
    this.deleteCourseClicked.emit(id);
  }
}


