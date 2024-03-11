import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent {
  @Input()course_sent:any
}
