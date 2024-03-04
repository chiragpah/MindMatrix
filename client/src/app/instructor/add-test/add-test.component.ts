import {
  Component,
  ViewChildren,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../Services/api.service';
import { StoreService } from '../../Services/store.service';
import { QuillComponent } from '../../shared/quill/quill.component';
import { Module } from '../../types/module.type';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent{
  testForm:FormGroup;
  courseId: any = null;
  editorStyle = {
    minHeight: '100px',
    backgroundColor: '#ffffff',
  };
  // @ViewChildren('quill') quill:any;
  constructor(
    private storeService: StoreService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private apiService:ApiService,
    private toastr: ToastrService
  ) {
    this.testForm=new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      length: new FormGroup({
        hours: new FormControl(0),
        minutes: new FormControl(0),
      }),
      sections:new FormArray([
       new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        questions: new FormArray([
          new FormGroup({
            queType: new FormControl('maq', [Validators.required]),
            questionTitle: new FormControl('', [Validators.required]),
            questionDescripton: new FormControl(''),
            option1: new FormControl('', [Validators.required]),
            option2: new FormControl('', [Validators.required]),
            option3: new FormControl('', [Validators.required]),
            option4: new FormControl('', [Validators.required]),
            option1Correct: new FormControl(false),
            option2Correct: new FormControl(false),
            option3Correct: new FormControl(false),
            option4Correct: new FormControl(false),
            inputTestCases: new FormControl(''),
            // outputTestCases:new FormControl(''),
          }),
        ])
       })
      ])
    })
  }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.ref.detectChanges();
  }

  getSectionsControls() {
    return (<FormArray>this.testForm.get('sections')).controls;
  }

  getQuestionsControls(line: any) {
    return (<FormArray>line.get('questions')).controls;
  }
  addSection() {
    let sectionCtrl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      questions: new FormArray([
        new FormGroup({
          queType: new FormControl('maq', [Validators.required]),
          questionTitle: new FormControl('', [Validators.required]),
          questionDescripton: new FormControl(''),
          option1: new FormControl('', [Validators.required]),
          option2: new FormControl('', [Validators.required]),
          option3: new FormControl('', [Validators.required]),
          option4: new FormControl('', [Validators.required]),
          option1Correct: new FormControl(false),
          option2Correct: new FormControl(false),
          option3Correct: new FormControl(false),
          option4Correct: new FormControl(false),
          inputTestCases: new FormControl(''),
          // outputTestCases:new FormControl(''),
        }),
      ])
     });
    (this.testForm.get('sections') as FormArray).push(sectionCtrl);
  }
  addQuestion(line: any) {
    let questionCtrl = new FormGroup({
      queType: new FormControl('maq'),
      questionTitle: new FormControl(''),
      questionDescripton: new FormControl(''),
      option1: new FormControl('', [Validators.required]),
      option2: new FormControl('', [Validators.required]),
      option3: new FormControl('', [Validators.required]),
      option4: new FormControl('', [Validators.required]),
      option1Correct: new FormControl(false),
      option2Correct: new FormControl(false),
      option3Correct: new FormControl(false),
      option4Correct: new FormControl(false),
      inputTestCases: new FormControl(''),
      // outputTestCases:new FormControl(''),
    });
    (<FormArray>line.get('questions')).push(questionCtrl);
  }

  deleteSection(i: number) {
    (this.testForm.get('sections') as FormArray).removeAt(i);
  }
  deleteQuestion(i: number) {
    (this.testForm.get('sections') as FormArray).removeAt(i);
  }
  isValid() {
    return this.testForm.valid;
  }
  addTest() {
    // console.log(this.testForm);
    let formData:any = this.testForm.value;
    console.log(formData);
    this.apiService.addTest(this.storeService.user._id,formData).subscribe(
      {
        next:(data)=>{
          this.toastr.success(data.message);
          this.router.navigate(['instructor','tests'])
        },
        error:(err)=>{
          this.toastr.error(err.message);
        }
      }
    )
    
  }
  getFormControl(control: any) {
    return control as FormControl;
  }

  questionValidationsChange(ctrls: any) {
    // console.log('LGOSSS', ctrls.value.queType);
    ctrls.get('option1').clearValidators();
    ctrls.get('option2').clearValidators();
    ctrls.get('option3').clearValidators();
    ctrls.get('option4').clearValidators();
    ctrls.get('option1Correct').clearValidators();
    ctrls.get('option2Correct').clearValidators();
    ctrls.get('option3Correct').clearValidators();
    ctrls.get('option4Correct').clearValidators();
    ctrls.get('inputTestCases').clearValidators();
    ctrls.get('option1Correct').reset();
    ctrls.get('option2Correct').reset();
    ctrls.get('option3Correct').reset();
    ctrls.get('option4Correct').reset();
    if (ctrls.value.queType == 'maq') {
      ctrls.get('option1Correct').setValue(false);
      ctrls.get('option2Correct').setValue(false);
      ctrls.get('option3Correct').setValue(false);
      ctrls.get('option4Correct').setValue(false);
      ctrls.get('option1').setValidators([Validators.required]);
      ctrls.get('option2').setValidators([Validators.required]);
      ctrls.get('option3').setValidators([Validators.required]);
      ctrls.get('option4').setValidators([Validators.required]);
      ctrls.get('option1Correct').setValidators([Validators.required]);
      ctrls.get('option2Correct').setValidators([Validators.required]);
      ctrls.get('option3Correct').setValidators([Validators.required]);
      ctrls.get('option4Correct').setValidators([Validators.required]);
      ctrls.get('inputTestCases').clearValidators();
    } else if (ctrls.value.queType == 'mcq') {
      ctrls.get('option1').setValidators([Validators.required]);
      ctrls.get('option2').setValidators([Validators.required]);
      ctrls.get('option3').setValidators([Validators.required]);
      ctrls.get('option4').setValidators([Validators.required]);
      ctrls.get('option1Correct').setValidators([Validators.required]);
      ctrls.get('option2Correct').clearValidators();
      ctrls.get('option3Correct').clearValidators();
      ctrls.get('option4Correct').clearValidators();
      ctrls.get('inputTestCases').clearValidators();
    } else if (ctrls.value.queType == 'coding') {
      ctrls.get('option1').clearValidators();
      ctrls.get('option2').clearValidators();
      ctrls.get('option3').clearValidators();
      ctrls.get('option4').clearValidators();
      ctrls.get('option1Correct').clearValidators();
      ctrls.get('option2Correct').clearValidators();
      ctrls.get('option3Correct').clearValidators();
      ctrls.get('option4Correct').clearValidators();
      ctrls.get('inputTestCases').setValidators([Validators.required]);
    } else if (ctrls.value.queType == 'truefalse') {
      ctrls.get('option1').clearValidators();
      ctrls.get('option2').clearValidators();
      ctrls.get('option3').clearValidators();
      ctrls.get('option4').clearValidators();
      ctrls.get('option1Correct').setValidators([Validators.required]);
      ctrls.get('option2Correct').clearValidators();
      ctrls.get('option3Correct').clearValidators();
      ctrls.get('option4Correct').clearValidators();
      ctrls.get('inputTestCases').clearValidators();
    }
    ctrls.get('option1').updateValueAndValidity();
    ctrls.get('option2').updateValueAndValidity();
    ctrls.get('option3').updateValueAndValidity();
    ctrls.get('option4').updateValueAndValidity();
    ctrls.get('option1Correct').updateValueAndValidity();
    ctrls.get('option2Correct').updateValueAndValidity();
    ctrls.get('option3Correct').updateValueAndValidity();
    ctrls.get('option4Correct').updateValueAndValidity();
    ctrls.get('inputTestCases').updateValueAndValidity();
  }
}
