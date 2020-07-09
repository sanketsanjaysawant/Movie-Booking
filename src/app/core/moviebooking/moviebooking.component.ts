import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from 'src/app/services/customservice.service';

@Component({
  selector: 'app-moviebooking',
  templateUrl: './moviebooking.component.html',
  styleUrls: ['./moviebooking.component.scss']
})
export class MoviebookingComponent implements OnInit {


  public checkBoooking: any;
  seatAvailable = [];
  seatAvailableToDisplay = [];
  displayBookedSeats:any=[];
  audiNumber:any=[];


  constructor(public CustomserviceService: CustomserviceService) { }

  ngOnInit() {
  }

  sumbitBooking(event) {

    this.audiNumber = this.CustomserviceService.audiNumber;
    this.checkBoooking = this.CustomserviceService.checkBooking(event);
    this.seatAvailable = this.CustomserviceService.seatAvailable;
    this.seatAvailableToDisplay = [...this.seatAvailable];
    this.CustomserviceService.seatAvailable = []; 
    this.displayBookedSeatsFunction();  
       
  }

  displayBookedSeatsFunction(){
    if(this.audiNumber=="1"){
      this.displayBookedSeats=this.CustomserviceService.seatAlreadyBooked1;
      this.CustomserviceService.seatAlreadyBooked1 =[];
    }
    if(this.audiNumber=="2"){
      this.displayBookedSeats=this.CustomserviceService.seatAlreadyBooked2;
      this.CustomserviceService.seatAlreadyBooked2 =[];
    }
    if(this.audiNumber=="3"){
      this.displayBookedSeats=this.CustomserviceService.seatAlreadyBooked3;
      this.CustomserviceService.seatAlreadyBooked3 =[];
    }
  }
  
}
