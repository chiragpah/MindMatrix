import { Component,Input,Output,EventEmitter,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegistrationComponent{ 
  registrationform!: FormGroup;
  @ViewChild('RegistrationModal') RegistrationModal!: ElementRef; 
  validation:Validation=new Validation();
  @Input() showModal: boolean = false;
  @Output() switchToLoginClicked = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private route:Router
) {}
  switchToLogin() {
    this.switchToLoginClicked.emit();
  }
  get f() {
    return this.registrationform.controls;
  }
  
 
  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5),this.validation.nameValidator]],
     
      email: ['', [Validators.required, this.validation.emailValidator]],
     
      password: ['', [Validators.required, Validators.minLength(8),this.validation.passwordValidator]],

     
    });
  }
  onSubmit() {
    if(this.registrationform.invalid){
      return;
    }
      else{
        this.route.navigate(['/otp']); 
        console.log(this.registrationform.value); // Submit the form data
        this.closeModal()

      }
      
    
  }
  closeModal(){
    const modal = this.RegistrationModal.nativeElement as HTMLElement;
    modal.style.display = 'none';
  }
  
}
