import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
   @Input() items:any;
  
   constructor(){}
    url:string='';
   generateRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i+1)
   }
 
 
 

} 
