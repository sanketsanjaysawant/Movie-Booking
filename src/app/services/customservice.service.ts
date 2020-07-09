import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {

  selectedSeats: any;
  audiArray = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"];
  resetArray = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"];
  audi1Array = ["B9", "C1", "C8", "C9"]
  audi2Array = ["B1", "B7", "B8", "B9", "C8", "C9"]
  audi3Array = ["A8", "A9", "B9", "C1", "C2", "C9"]
  audiSeatsSelected: any = [];
  index: any;
  audiNumber: any;
  mediatorArray: any = [];
  bookingArray: any = [];
  seatAvailable: any = [];
  storeBookedSeatsArray: any=[];
  seatsForPayment: any = [];
  popOutSeats: any = [];
  totalPriceNoTax: any = 0;
  serviceTaxArray = [];
  serviceTax: any = 0;
  totalServiceTax: any = 0;
  BharatKalyanCessArray: any = [];
  bharatKalyanCess: any = 0;
  totalBharatCess: any = 0;
  finalTicketPriceArray = [];
  finalTicketPrice: any = 0;
  revenuegenerated: any = 0;
  fullRevenue: any = 0;
  

  seatAlreadyBooked1:any=[];
  seatAlreadyBooked2:any=[];
  seatAlreadyBooked3:any=[];
  filterBookedSeats:any=[];

  


  constructor() { }

  
  public setAudiNoValue(value) {

    //To generate a single array to work with, on selection of any show No.
    this.shufflingAudi(value);

    //To generate original Auditorium seats with full capacity
    this.generatingRespectiveAudiSeats();
  }


  shufflingAudi(value) {
    this.audiNumber = value;

    if (this.audiNumber == "1") {
      this.mediatorArray = this.audi1Array;
    }
    else if (this.audiNumber == "2") {
      this.mediatorArray = this.audi2Array;
    }
    else {
      this.mediatorArray = this.audi3Array;
    }
  }



  generatingRespectiveAudiSeats() {

    this.audiArray = [...this.resetArray]

    for (var j = 0; j <= this.audiArray.length; j++) {
      this.index = this.audiArray.indexOf(this.mediatorArray[j]);
      if (this.index != -1) {
        this.audiArray.splice(this.index, 1);
      }
    }
    this.bookingArray = [...this.audiArray];
  }


  //To check if the seats selected by user are available to book & function executes on the click of "Check Availability" button.
  checkBooking(event: any) {

    this.selectedSeats = (event).toUpperCase();
    this.audiSeatsSelected.push(...this.selectedSeats.split(","));
    this.audiSeatsSelected = Array.from(new Set(this.audiSeatsSelected));
    

  //For fetching the seats that are "Available to book"
    for (var i = 0; i <= this.bookingArray.length; i++) {
      this.index = this.bookingArray.indexOf(this.audiSeatsSelected[i]);
      
      if (this.index != -1) {
        this.bookingArray.splice(this.index, 1);
        this.seatAvailable.push(this.audiSeatsSelected[i]);
        this.seatsForPayment = [...this.seatAvailable];
        this.audiSeatsSelected[i] = [];   
      }
    }

    //For fetching the seats that are "Already Booked"
    this.storeBookedSeatsArray = [...this.storeBookedSeatsArray, ...this.seatsForPayment]

    if (this.audiNumber == "1") {
      this.filterBookedSeats = this.storeBookedSeatsArray.filter(item => this.audi1Array.includes(item))
      this.seatAlreadyBooked1 = this.audiSeatsSelected.filter(item => this.filterBookedSeats.includes(item))
    }
    else if (this.audiNumber == "2") {
      this.filterBookedSeats = this.storeBookedSeatsArray.filter(item => this.audi2Array.includes(item))
      this.seatAlreadyBooked2 = this.audiSeatsSelected.filter(item => this.filterBookedSeats.includes(item)) 
    }
    else{
      this.filterBookedSeats = this.storeBookedSeatsArray.filter(item => this.audi3Array.includes(item))
      this.seatAlreadyBooked3 = this.audiSeatsSelected.filter(item => this.filterBookedSeats.includes(item))
    }
    this.filterBookedSeats=[];
  }


  //Function executes on the click of "Confirm & Pay" button.
  confirmAndPay() {
    
    //to perform all financial calculations
    this.allCalculations();

    //To add booked seats from original auditorium array to respective disabled seats audi auditorium
    this.disableBookedSeats();
  }



  disableBookedSeats() {
    
    this.popOutSeats = [...this.seatsForPayment];

    if (this.audiNumber == "1") {
      this.audi1Array = this.audi1Array.concat(this.popOutSeats);
    }
    else if (this.audiNumber == "2") {
      this.audi2Array = this.audi2Array.concat(this.popOutSeats); 
    }
    else {
      this.audi3Array = this.audi3Array.concat(this.popOutSeats); 
    }  
  }



  allCalculations() {

    //Calculating Ticket Rate
    this.calculateTicketRate();

    //Calculating Service Tax 
    this.calculateServiceTax();

    //Calculating Swachh Bharat Cess & Krishi Kalyan Cess
    this.calculateBharatKalyanCess();

    //Calculating Final Revenue
    this.calculateRevenue();
  }



  calculateTicketRate() {

    let platinum = 500;
    let gold = 350;
    let silver = 300;

    var occurencesPlatinum = this.seatsForPayment.filter(item => item.startsWith('A')).length;
    var occurencesGold = this.seatsForPayment.filter(item => item.startsWith('B')).length;
    var occurencesSilver = this.seatsForPayment.filter(item => item.startsWith('C')).length;

    var platinumPrice = occurencesPlatinum * platinum;
    var goldPrice = occurencesGold * gold;
    var silverPrice = occurencesSilver * silver;

    this.totalPriceNoTax = platinumPrice + goldPrice + silverPrice;
  }




  calculateServiceTax() {

    this.serviceTax = parseFloat(((14 / 100) * this.totalPriceNoTax).toFixed(2));
    this.serviceTaxArray.push(this.serviceTax);
    this.totalServiceTax = parseFloat(this.serviceTaxArray.reduce((a,b) => a + b, 0).toFixed(2));
  }


  calculateBharatKalyanCess() {

    this.bharatKalyanCess = parseFloat(((0.5 / 100) * this.totalPriceNoTax).toFixed(2));
    this.BharatKalyanCessArray.push(this.bharatKalyanCess);
    this.totalBharatCess = parseFloat(this.BharatKalyanCessArray.reduce((a,b) => a + b, 0).toFixed(2));
  }


  calculateRevenue() {

    this.finalTicketPrice = (this.totalPriceNoTax + this.serviceTax + this.bharatKalyanCess + this.bharatKalyanCess).toFixed(0);
    this.finalTicketPriceArray.push(parseFloat(this.finalTicketPrice));
    this.revenuegenerated = this.finalTicketPriceArray.reduce((a,b) => a + b, 0);

    this.fullRevenue = (this.revenuegenerated - this.totalServiceTax - this.totalBharatCess - this.totalBharatCess).toFixed(0);
  }
}
