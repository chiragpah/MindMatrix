import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  addcourse!: FormGroup;
  

    constructor( private formBuilder: FormBuilder){}
    ngOnInit(): void {
      this.addcourse = this.formBuilder.group({
       
        name: ['', [Validators.required]],
       
        description: ['', [Validators.required, Validators.minLength(8)]],
        price:['', [Validators.required]],
        estimatedprice:[''],
        tags:['', [Validators.required]],
        courselevel:['', [Validators.required]],
        demourl:[''],
        tests: this.formBuilder.array([]),
        sections: this.formBuilder.array([
          this.formBuilder.group({
            videoname: ['', [Validators.required]], 
            videourl: ['', [Validators.required]], 
            videodescription: ['', [Validators.required]] ,
            videolength:['', [Validators.required]]    
        })
        ]),
        
       

       
      });
     
    }
    get sections() {
      return this.addcourse.get('sections') as FormArray;
    }
    addSection() {
      const section = this.formBuilder.group({
        videoname: [''],
        videodescription:[''],
        videourl:['']
        // Add more form controls for each section as needed
      });
      this.sections.push(section);
    }
    removeSection(index: number) {
      this.sections.removeAt(index);
    }

    get tests() {
      return this.addcourse.get('tests') as FormArray;
    }
  
    addTest() {
      const test = this.formBuilder.group({
        question: [''],
        options: this.formBuilder.array([]),
        correctAnswer: [''] // New FormControl for correct answer
      });
      this.tests.push(test);
    }
  
    removeTest(index: number) {
      this.tests.removeAt(index);
    }
  
    addOption(testIndex: number) {
      const options = this.tests.at(testIndex).get('options') as FormArray;
      options.push(this.formBuilder.control(''));
    }
  
    removeOption(testIndex: number, optionIndex: number) {
      const options = (this.tests.at(testIndex).get('options') as FormArray);
      options.removeAt(optionIndex);
    }
    onSubmit() {
      // Handle form submission
      console.log(this.addcourse.value);
    }

   
  
   
}
