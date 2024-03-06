import { Component } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  formData: any = {};
  ratingSelected: boolean = false;

  constructor(private feedbackService: FeedbackService) { }

  submitFeedback() {
    console.log('Submitted Feedback:', this.formData);
    this.feedbackService.submitFeedback(this.formData)
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
