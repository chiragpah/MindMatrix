import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { StoreService } from '../../Services/store.service';

@Component({
  selector: 'app-ins-tests',
  templateUrl: './ins-tests.component.html',
  styleUrl: './ins-tests.component.css'
})
export class InsTestsComponent {
  tests:any=[]
  constructor(private router:Router,private storeService:StoreService,private apiService:ApiService){}
  ngOnInit(){
    this.apiService.getInstructorTest(this.storeService.user._id).subscribe({
      next:(data)=>{
        console.log(data);
        this.tests=data.tests
      }
    })
  }

  redirectToAddTest(){
    this.router.navigate(['instructor','add-test'])
  }
}
