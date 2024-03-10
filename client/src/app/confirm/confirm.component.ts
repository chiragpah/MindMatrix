import { Component } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  transactionId = "";

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
  }
}
