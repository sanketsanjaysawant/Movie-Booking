import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviebookingComponent } from './core/moviebooking/moviebooking.component';
import { HomeComponent } from './home/home.component';
import { AudidisplayComponent } from './core/audidisplay/audidisplay.component';
import { CustomserviceService } from './services/customservice.service';
import { PaymentComponent } from './core/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviebookingComponent,
    HomeComponent,
    AudidisplayComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
