import { Component,OnInit } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  showAnswer: boolean;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
 
  faqs: FAQ[] = [
    { 
      question: 'What courses do you offer?', 
      answer: 'We offer a wide range of courses including programming, design, business, mathematics, and literature.', 
      showAnswer: false 
    },
    { 
      question: 'How can I enroll in a course?', 
      answer: 'You can enroll in a course by signing up on our website, browsing through available courses, and selecting the one you want to enroll in.', 
      showAnswer: false 
    },
    { 
      question: 'Is there a free trial available for courses?', 
      answer: 'Yes, we offer a free trial for some of our courses. You can check the course details to see if a free trial is available.', 
      showAnswer: false 
    },
    { 
      question: 'Do you provide certificates upon course completion?', 
      answer: 'Yes, we provide certificates upon successful completion of our courses. These certificates can be downloaded from your account dashboard.', 
      showAnswer: false 
    },
    { 
      question: 'Can I access the course materials offline?', 
      answer: 'No, currently our course materials are only accessible online. However, you can download some course materials for offline viewing, depending on the course.', 
      showAnswer: false 
    },
    // Add more FAQs as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnswer(faqIndex: number): void {
    this.faqs[faqIndex].showAnswer = !this.faqs[faqIndex].showAnswer;
  }
}
