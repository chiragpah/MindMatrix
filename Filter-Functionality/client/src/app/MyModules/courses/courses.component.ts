

import { Component } from '@angular/core';

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { 
      title: 'Angular Fundamentals', 
      description: 'Learn the basics of Angular', 
      duration: '6 hours',
      rating: '4', 
      topic: 'Frontend Web Development', 
      price: '700', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png'
    },
    { 
      title: 'React Fundamentals', 
      description: 'A quick introduction to React', 
      duration: '4 hours',
      rating: '2', 
      topic: 'Frontend Web Development', 
      price: '1000', 
      imageUrl: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png' 
    },
    { 
      title: 'Node.js Fundamentals', 
      description: 'Master Node.js fundamentals', 
      duration: '8 hours',
      rating: '3', 
      topic: 'Backend Web Development', 
      price: '800', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png' 
    },
    { 
      title: 'Python Fundamentals', 
      description: 'Learn the basics of Python', 
      duration: '5 hours',
      rating: '5', 
      topic: 'Machine Learning', 
      price: '700', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png' 
    },
    { 
      title: 'Advanced Python Course', 
      description: 'Learn the basics of Python', 
      duration: '6 hours',
      rating: '4', 
      topic: 'Machine Learning', 
      price: '700', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png'
    },
    { 
      title: 'JavaScript Fundamentals', 
      description: 'A quick introduction to React', 
      duration: '4 hours',
      rating: '2', 
      topic: 'Web Development', 
      price: '1000', 
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png' 
    },
    { 
      title: 'Express JS Basics', 
      description: 'Master Node.js fundamentals', 
      duration: '8 hours',
      rating: '3', 
      topic: 'Backend Web Development', 
      price: '800', 
      imageUrl: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' 
    },
    { 
      title: 'Advanced React Course', 
      description: 'Learn the basics of Python', 
      duration: '5 hours',
      rating: '5', 
      topic: 'Frontend Web Development', 
      price: '700', 
      imageUrl: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png' 
    },
    { 
      title: 'Complete Java Programming', 
      description: 'Learn Core Java Skills including the lastest version of Java (Java 21)', 
      duration: '5 hours',
      rating: '5', 
      topic: 'JAVA', 
      price: '700', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png' 
    },
    { 
      title: 'The Complete iOS Developer Course', 
      description: 'Learn iOS development', 
      duration: '6 hours',
      rating: '4', 
      topic: 'iOS', 
      price: '700', 
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/picons-social/57/social_ios_round-512.png'
    },
    { 
      title: 'The Data Science Course: Complete Data Science Bootcamp', 
      description: 'Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning', 
      duration: '4 hours',
      rating: '2', 
      topic: 'Machine Learning', 
      price: '1000', 
      imageUrl: 'https://skillvoid.in/wp-content/uploads/2023/09/Data-Science-logo.jpg' 
    },
    { 
      title: 'The Ultimate ChatGPT Generative AI Course', 
      description: 'Learn how to become a Prompt Engineer!', 
      duration: '8 hours',
      rating: '3', 
      topic: 'Artificial Intelligence', 
      price: '800', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OT1nWodCkOzRkj1JQjHYoD6EzNJ1GMfrnvJ1nfHmd6d1vWghkvKW_MSJMPQDAPFHmkg&usqp=CAU' 
    },
    { 
      title: 'Artificial Intelligence & Machine Learning from scratch', 
      description: 'Give you a solid background in AI with MACHINE LEARNING, Deep Learning', 
      duration: '5 hours',
      rating: '5', 
      topic: 'Artificial Intelligence', 
      price: '700', 
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*wLUt3WBKgA1ewi43joZ2Tg.jpeg' 
    },
    { 
      title: 'The complete Java Android App development Bootcamp', 
      description: 'Learn the basics of Python', 
      duration: '6 hours',
      rating: '4', 
      topic: 'Android Development', 
      price: '700', 
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png'
    },
    { 
      title: 'The Complete Android 14 Developer Course - Java & Kotlin', 
      description: 'A quick introduction to React', 
      duration: '4 hours',
      rating: '2', 
      topic: 'Android Development', 
      price: '1000', 
      imageUrl: 'https://www.bitshifted.co/blog/kotlin-for-java-developers/img/kotlin-java-logo.png' 
    },
  ];

  filteredCourses = this.courses;

  searchText: string = '';
  selectedRating: string = '1';
  selectedTopic: string = '';
  minDuration: number = 0;
  maxDuration: number = 24; 
  minPrice: number = 0;
  maxPrice: number = 1000; 

  topics: string[] = [];

  constructor() {
    this.getTopics();
  }
  // For getting topic in dropdown
  getTopics() {
    this.courses.forEach(course => {
      if (!this.topics.includes(course.topic)) {
        this.topics.push(course.topic);
      }
    });
  }
  // For Advance Filter 
  applyFilters() {
    this.filteredCourses = this.courses.filter(course => {
      return (
        course.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
        (this.selectedRating === '' || parseInt(course.rating) >= parseInt(this.selectedRating)) &&
        (this.selectedTopic === '' || course.topic === this.selectedTopic) &&
        (!this.minDuration || parseInt(course.duration.split(' ')[0]) >= this.minDuration) &&
        (!this.maxDuration || parseInt(course.duration.split(' ')[0]) <= this.maxDuration) &&
        (!this.minPrice || parseInt(course.price.replace('$', '')) >= this.minPrice) &&
        (!this.maxPrice || parseInt(course.price.replace('$', '')) <= this.maxPrice)
      );
    });
  }
  // For Search Button 
  search() {
    if (!this.searchText) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => {
        return course.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }
  //  For directly getting filtered 
  filterCourses() {
    this.filteredCourses = this.courses.filter(course => {
      return course.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  ngOnInit() {
    // Call getTopics() when the component initializes
    this.getTopics();
  }

applyTopicFilter(topic: string) {
    this.selectedTopic = topic; // Set the selectedTopic property to the selected topic
    this.applyFilters();

}
}
