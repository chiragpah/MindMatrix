import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , AbstractControl} from '@angular/forms';



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
        testGroup: this.formBuilder.group({
          questions: this.formBuilder.array([])
        }),
       
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
        
      });
      this.sections.push(section);
    }
    removeSection(index: number) {
      this.sections.removeAt(index);
    }

    get testQuestions() {
      return (this.addcourse.get('testGroup.questions') as FormArray);
    }
    getOptions(question: FormGroup): FormArray {
      return question.get('options') as FormArray;
    }
    
    addTestQuestion() {
      const question = this.formBuilder.group({
        question: ['', [Validators.required]],
        options: this.formBuilder.array([]), // Empty array initially
        correctAnswer: ['']
      });
      this.testQuestions.push(question);
    }
    
    removeTestQuestion(index: number) {
      this.testQuestions.removeAt(index);
    }
    addOption(questionIndex: number) {
      const options = this.testQuestions.at(questionIndex).get('options') as FormArray;
      options.push(this.formBuilder.control(''));
    }
    removeOption(questionIndex: number, optionIndex: number) {
      const options = this.testQuestions.at(questionIndex).get('options') as FormArray;
      options.removeAt(optionIndex);
    }
   
    onSubmit() {
      // Handle form submission
      console.log(this.addcourse.value);
    }

   
  
   
}
