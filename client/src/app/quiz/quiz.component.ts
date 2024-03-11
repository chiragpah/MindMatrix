import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';

interface Question {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
}

interface Option {
  id: string;
  text: string;
  selected?: boolean; // Optional property to track if the option is selected
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  display!: boolean;
  constructor(
    private dialog: MatDialog
  ) { }
  questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        { selected: false, id: 'a', text: 'Hyper Text Markup Language' },
        { selected: false, id: 'b', text: 'Hyperlinks and Text Markup Language' },
        { selected: false, id: 'c', text: 'Home Tool Markup Language' },
        { selected: false, id: 'd', text: 'Hyper Text Modern Language' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 2,
      question: "Which CSS property is used to control the spacing between elements?",
      options: [
        { selected: false, id: 'a', text: 'margin' },
        { selected: false, id: 'b', text: 'padding' },
        { selected: false, id: 'c', text: 'border' },
        { selected: false, id: 'd', text: 'spacing' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 3,
      question: "Which of the following is NOT a valid HTML tag?",
      options: [
        { selected: false, id: 'a', text: '<div>' },
        { selected: false, id: 'b', text: '<header>' },
        { selected: false, id: 'c', text: '<section>' },
        { selected: false, id: 'd', text: '<span>' }
      ],
      correctAnswer: 'd'
    },
    {
      id: 4,
      question: "What does CSS stand for?",
      options: [
        { selected: false, id: 'a', text: 'Creative Style Sheets' },
        { selected: false, id: 'b', text: 'Cascading Style Sheets' },
        { selected: false, id: 'c', text: 'Computer Style Sheets' },
        { selected: false, id: 'd', text: 'Coded Style Sheets' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 5,
      question: "Which HTML tag is used to define an unordered list?",
      options: [
        { selected: false, id: 'a', text: '<ul>' },
        { selected: false, id: 'b', text: '<ol>' },
        { selected: false, id: 'c', text: '<li>' },
        { selected: false, id: 'd', text: '<list>' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 6,
      question: "Which property in CSS is used to change the font size of text?",
      options: [
        { selected: false, id: 'a', text: 'font-size' },
        { selected: false, id: 'b', text: 'text-style' },
        { selected: false, id: 'c', text: 'font-type' },
        { selected: false, id: 'd', text: 'size' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 7,
      question: "Which CSS selector targets elements with a specific class?",
      options: [
        { selected: false, id: 'a', text: '.class' },
        { selected: false, id: 'b', text: '#id' },
        { selected: false, id: 'c', text: 'element' },
        { selected: false, id: 'd', text: 'tag' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 8,
      question: "Which of the following is NOT a valid value for the 'display' property in CSS?",
      options: [
        { selected: false, id: 'a', text: 'inline' },
        { selected: false, id: 'b', text: 'block' },
        { selected: false, id: 'c', text: 'center' },
        { selected: false, id: 'd', text: 'inline-block' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 9,
      question: "Which HTML tag is used to define a hyperlink?",
      options: [
        { selected: false, id: 'a', text: '<a>' },
        { selected: false, id: 'b', text: '<link>' },
        { selected: false, id: 'c', text: '<href>' },
        { selected: false, id: 'd', text: '<hyperlink>' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 10,
      question: "Which CSS property is used to add shadows to elements?",
      options: [
        { selected: false, id: 'a', text: 'box-shadow' },
        { selected: false, id: 'b', text: 'element-shadow' },
        { selected: false, id: 'c', text: 'shadow' },
        { selected: false, id: 'd', text: 'object-shadow' }
      ],
      correctAnswer: 'a'
    }
  ]
  correctScore: number = 0;
  questionsLeft: number = 10;
  ngOnInit(): void {
  }

  onOptionSelect(questionId: number, optionId: string) {
    const question = this.questions.find(q => q.id === questionId);
    if (question) {
      question.options.forEach(option => {
        if (option.id === optionId) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
    console.log('after selection ', this.questions)
    this.correctScore = this.calculateScore(); // Update the correct score counter
    this.questionsLeft = this.getQuestionsLeft() // Update How many Questions are Left
  }


  calculateScore(): number {
    let correctCount = 0;
    this.questions.forEach(question => {
      const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`) as HTMLInputElement;
      if (selectedOption && selectedOption.value === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  }
  isCorrectOption(question: Question, optionId: string): string {
    const selectedOption = question.options.find(option => option.id === optionId);
    if (!selectedOption) return ''; // Handle edge case

    if (selectedOption.id === question.correctAnswer) {
      return 'input-radio-correct-icon animation';
    } else {
      return 'input-radio-wrong-icon';
    }
  }
  isCorrectOptionselected(questionId: number, optionId: string): boolean {
    const question = this.questions.find(q => q.id === questionId);
    if (question) {
      return optionId === question.correctAnswer;
    }
    return false;
  }

  onEveryOptionSelect(questionId: number, optionId: string) {
    // Your option selection logic here

    // Check if all questions are answered
    const allAnswered = this.questions.every(question => {
      return question.options.some(option => option.selected);
    });

    // If all questions are answered, open the dialog
    if (allAnswered) {
      const dialogRef = this.dialog.open(ScoreDialogComponent, {
        data: { score: this.correctScore, totalQuestions: this.questions.length }
      });
    }
  }

  onSubmit(): void {
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      data: { score: this.correctScore, totalQuestions: this.questions.length }
    });
    this.display = true;
  }

  getQuestionsLeft(): number {
    let count = 0;
    this.questions.forEach(question => {
      if (!question.options.some(option => option.selected)) {
        count++;
      }
    });
    return count;
  }

}