import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  @Input() cardNumber: string;
  @Input() cvv: string;
  @Input() validity: string;
  @Input() cardHolder: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
