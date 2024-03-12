import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrl: './comment-template.component.css'
})
export class CommentTemplateComponent {
  @Input() comment: any; 
}
