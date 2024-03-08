import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtpService } from '../../../services/otp.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})

export class OtpComponent implements OnInit{
  loginform!: FormGroup;   
  ngOnInit() {
    this.loginform = new FormGroup({
       "digit_1": new FormControl(''),
       "digit_2": new FormControl(''),
       "digit_3": new FormControl(''),
       "digit_4": new FormControl(''),
  });
   
  }
    constructor(private otpservice:OtpService,private route:ActivatedRoute){}

  onKeyUpEvent(index: number, event: KeyboardEvent): void {
    const eventCode = event.which || event.keyCode;
    const codeBoxElement = this.getCodeBoxElement(index);
    
    if (codeBoxElement!.value.length === 1) {
      if (index !== 4) {
        this.getCodeBoxElement(index + 1)!.focus();
      } else {
        codeBoxElement!.blur();
        console.log('submit code');
      }
    }
    
    if (index === 4 && codeBoxElement!.value.length >= 1) {
      codeBoxElement!.value = codeBoxElement!.value.slice(0, 1); // Limit length to 1 character
    }
  
    if (eventCode === 8 && index !== 1) {
      this.getCodeBoxElement(index - 1)!.focus();
    }
  }

  onFocusEvent(index: number): void {
    for (let item = 1; item < index; item++) {
      const currentElement = this.getCodeBoxElement(item);
      if (!currentElement!.value) {
        currentElement!.focus();
        break;
      }
    }
  }

  private getCodeBoxElement(index: number): HTMLInputElement | null {
    return document.getElementById('codeBox' + index) as HTMLInputElement;
  }

 
  get f() {
    console.log(this.loginform.value);

    return this.loginform.controls;
  }  
  onsubmit(){
    if(this.loginform.valid){
    console.log(this.f['digit_1'].value);    
    const d1= this.f['digit_1'].value;
    const d2= this.f['digit_2'].value;
    const d3= this.f['digit_3'].value;
    const d4=this.f['digit_4'].value;
   
    
    const otp=d1 + d2 + d3 + d4;
    this.route.params.subscribe(params=>{
     const access_token=params['access_token'];
     this.otpservice.activateUser(access_token,otp).subscribe(response=>{
      console.log(response);
      
     
      
     
    
    })
    })
  }
  else{
    alert("OTP TOH DAL")
  }
   
  }
  
}
