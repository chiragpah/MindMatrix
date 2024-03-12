import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { any } from 'video.js/dist/types/utils/events';
import { SocketService } from '../../../../services/socket.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  courseId: any; // Replace with your actual courseId
  @Input() contentId: any; // Replace with your actual contentId
  newQuestionText: string = '';

  comments: any;


  // qaForm: FormGroup;

  constructor(private socketService:SocketService,private fb: FormBuilder, private commentService: CommentService, private route: ActivatedRoute) {
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
        this.socketService.emit('notification', { data: response});
        
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

    // Load comments when the component initializes
    this.loadComments();
  }

  loadComments(): void {
    console.log("we are inside loadcomments "+this.courseId+ " "+this.contentId)
    this.commentService.getComments(this.courseId.toString(), this.contentId.toString()).subscribe(
      (response) => {
        console.log('Comments loaded successfully:', response);
        this.comments = response.comments.reverse();
        console.log("we got the all comments ", this.comments[0]);
        console.log("we got the all comments ", JSON.stringify(this.comments[0]));

      },
      (error) => { 
        console.error('Error loading comments:', error);
        // Handle error
      }
    );
  }
  
}
