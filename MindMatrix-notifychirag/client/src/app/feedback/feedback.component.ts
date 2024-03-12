import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  formData: any = {};
  courseId: any;
  ratingSelected: boolean = false;

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
  }

  submitFeedback() {
    console.log('Submitted Feedback:', this.formData);

    this.feedbackService.submitFeedback(this.formData, this.courseId)
      .subscribe((response: any) => {
        console.log('Feedback submitted successfully:', response);
        // Reset form data
        this.formData = {};
        this.ratingSelected = false;
      }, (error: any) => {
        console.error('Error submitting feedback:', error);
      });
  }

  onRatingSelected(rating: number) {
    this.ratingSelected = true;
    this.formData.rating = rating;
  }
}
