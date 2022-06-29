import { Component } from '@angular/core';
import { APIConfig } from './APIConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBookingWeb';
  // IsLogin = localStorage.getItem('apitoken') != null ? true : false;
  // IsAdmin = localStorage.getItem('role') == 'admin' ? true : false;
  
  IsLogin = false;
  IsAdmin = false;

  constructor(){
    this.IsLogin = localStorage.getItem('apitoken') != null ? true : false;
    this.IsAdmin = localStorage.getItem('role') == 'admin' ? true : false;
    console.log('app component load');

    var token =localStorage.getItem('apitoken');
    if(token != null){
      var tokenDetail = APIConfig.DecodeJWTToken(token);
      var expDate =new Date(tokenDetail.exp*1000);
      var now = new Date();
      if(now > expDate){
        this.IsLogin = false;
        localStorage.removeItem('apitoken');
        localStorage.removeItem('role')
      }
    }
  }
}
