import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBookingWeb';
  IsLogin = localStorage.getItem('apitoken') != null ? true : false;
  IsAdmin = localStorage.getItem('role') == 'admin' ? true : false;

  constructor(){
    console.log('app component load');
  }
}
