import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  currentRating: number = 0;
  maxRating: number = 5;

  @Output() ratingSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  updateRating(n: number) {
    this.currentRating = n === this.currentRating ? 0 : n;
    this.showRating();
    this.ratingSelected.emit(this.currentRating);
  }

  showRating() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      if (index < this.currentRating) {
        star.classList.add('rated');
      } else {
        star.classList.remove('rated');
      }
    });
  }
}
