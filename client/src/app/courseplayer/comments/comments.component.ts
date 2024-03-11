import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { any } from 'video.js/dist/types/utils/events';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  courseId: any; // Replace with your actual courseId
  @Input() contentId: any; // Replace with your actual contentId
  newQuestionText: string = '';




  // qaForm: FormGroup;

  constructor(private fb: FormBuilder, private commentService: CommentService, private route: ActivatedRoute) {
    // this.qaForm = this.fb.group({
    //   question: ['', Validators.required]
    //   // answer: ['', Validators.required]
    // });
  }

  addComment(): void {
    console.log("we are adding the comment ");
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
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log(this.contentId);

  }

  // submitForm(): void {
  //   if (this.qaForm.valid) {
  //     const questionValue = this.qaForm.get('question')!.value;
  //     const answerValue = this.qaForm.get('answer')!.value;

  //     console.log('Question:', questionValue);
  //     console.log('Answer:', answerValue);

  //     // You can perform further actions, such as sending the data to a server
  //     // or updating the UI.

  //     // Reset the form after submission (optional)
  //     this.qaForm.reset();
  //   }
}
