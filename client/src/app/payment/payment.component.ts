import { style } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  amount = 0;
  id: string = '';
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  constructor(private payment: PaymentService, private router: Router, private order: OrderService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.amount = this.payment.totalAmount
    console.log(window.paypal);
    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',

      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.amount.toString(),
                currency_code: 'USD'
              }
            }
          ]
        })
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          if (details.status === 'COMPLETED') {
            this.payment.transactionID = details.id;
            this.order.createOrder(this.amount, this.id, this.payment.transactionID).subscribe(data => {

            })


            this.router.navigate(['confirm'])
          }

        })
      },
      onError: (error: any) => {
        console.log(error);

      }
    }).render(this.paymentRef.nativeElement)

  }
  cancel() {

  }
}


