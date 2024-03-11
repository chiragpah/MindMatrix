import { Component,OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../Services/comment/comment.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  courseId = 'your-course-id'; // Replace with your actual courseId
  contentId = 'your-content-id'; // Replace with your actual contentId
  newQuestionText: string = '';
  
  qaForm: FormGroup;

  constructor(private fb: FormBuilder,private commentService: CommentService) {
    this.qaForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }
  addComment(): void {
    this.commentService.addComment(this.courseId, this.contentId, this.newQuestionText).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
        // Handle success, e.g., update UI
      },
      (error) => {
        console.error('Error adding comment:', error);
        // Handle error
      }
    );
  }

  addReply(replyData: any): void {
    this.commentService.addReply(this.courseId, this.contentId, replyData).subscribe(
      (response) => {
        console.log('Reply added successfully:', response);
        // Handle success, e.g., update UI
      },
      (error) => {
        console.error('Error adding reply:', error);
        // Handle error
      }
    );
  }






  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.qaForm.valid) {
      const questionValue = this.qaForm.get('question').value;
      const answerValue = this.qaForm.get('answer').value;

      console.log('Question:', questionValue);
      console.log('Answer:', answerValue);

      // You can perform further actions, such as sending the data to a server
      // or updating the UI.
      
      // Reset the form after submission (optional)
      this.qaForm.reset();
    }
  }
}
