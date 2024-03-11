import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  totalAmount = 0.1;
  transactionID = "";


}
