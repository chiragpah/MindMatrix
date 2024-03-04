import { Component, Input } from '@angular/core';
import { Course } from '../../../types/course.type';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: any;
  @Input() name: string="";
}
