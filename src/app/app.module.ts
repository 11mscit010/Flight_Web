import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { AirlineListComponent } from './Admin/airline-list/airline-list.component';
import { FlightListComponent } from './Admin/flight-list/flight-list.component';
import { DiscountListComponent } from './Admin/discount-list/discount-list.component';
import { ReportListComponent } from './Admin/report-list/report-list.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { UserMasterComponent } from './User/user-master/user-master.component';
import { BookFlightComponent } from './User/book-flight/book-flight.component';
import { ManageBookingComponent } from './User/manage-booking/manage-booking.component';
import { BookingHistoryComponent } from './User/booking-history/booking-history.component';
import { GlobalErrorHandlerService } from './Helper/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminMasterComponent,
    AirlineListComponent,
    FlightListComponent,
    DiscountListComponent,
    ReportListComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserMasterComponent,
    BookFlightComponent,
    ManageBookingComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
