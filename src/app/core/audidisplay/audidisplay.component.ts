import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from 'src/app/services/customservice.service';

@Component({
  selector: 'app-audidisplay',
  templateUrl: './audidisplay.component.html',
  styleUrls: ['./audidisplay.component.scss']
})
export class AudidisplayComponent implements OnInit {
  public checkBoooking: any;
  public selectingAudi: any;

  audis = [
    { name: "SELECT" },
    { id: 1, name: "Show 1" },
    { id: 2, name: "Show 2" },
    { id: 3, name: "Show 3" }
  ];
  audi1: boolean;
  audi2: boolean;
  audi3: boolean;
  audiArray=[];

  totalSeatsAvailable: any;
  private audiNumber: any;
  constructor(public CustomserviceService: CustomserviceService) { }

  ngOnInit() {
  }

  public onChange(event): void {

    
    this.checkingAudiNumberToDisplayAudi(event)

    this.CustomserviceService.setAudiNoValue(this.audiNumber);
    this.totalSeatsAvailable = this.CustomserviceService.audiArray.length;
    this.CustomserviceService.audiArray = this.CustomserviceService.resetArray;

    this.audiArray=this.CustomserviceService.audiArray
  }

  // Function to display respective auditorium seats on UI
  checkingAudiNumberToDisplayAudi(event) {
    this.audiNumber = event.target.value;

    if (this.audiNumber == "1") {
      this.audi1 = true;
      this.audi2 = false;
      this.audi3 = false
    }
    else if (this.audiNumber == "2") {
      this.audi1 = false;
      this.audi3 = false;
      this.audi2 = true;
    }
    else if (this.audiNumber == "3") {
      this.audi3 = true;
      this.audi1 = false;
      this.audi2 = false;
    }
  }
}
