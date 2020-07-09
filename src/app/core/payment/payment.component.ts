import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from 'src/app/services/customservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  audiNumber: number;
  seatsForPayment: any;
  paymentDoneFlag: boolean;
  totalPriceNoTax: any;
  totalServiceTax: any;
  totalBharatCess: any;
  finalTicketPrice: any;
  fullRevenue: any;
  serviceTax: any;
  bharatKalyanCess: any;

  constructor(public CustomserviceService: CustomserviceService) { }

  ngOnInit() {
  }



  proceedForPayment() {
    this.CustomserviceService.confirmAndPay();
    this.audiNumber = this.CustomserviceService.audiNumber;
    this.seatsForPayment = this.CustomserviceService.seatsForPayment;
    this.paymentDoneFlag = true;
    this.totalPriceNoTax = this.CustomserviceService.totalPriceNoTax;
    this.totalServiceTax = this.CustomserviceService.totalServiceTax;
    this.totalBharatCess = this.CustomserviceService.totalBharatCess;
    this.finalTicketPrice = this.CustomserviceService.finalTicketPrice;
    this.fullRevenue = this.CustomserviceService.fullRevenue;
    this.serviceTax = this.CustomserviceService.serviceTax;
    this.bharatKalyanCess = this.CustomserviceService.bharatKalyanCess;
  }
}
