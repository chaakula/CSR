import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerInfo: CustomerInfo = new CustomerInfo();
  constructor() { }

  ngOnInit() {
  }
  evaluate() {
    console.log(this.customerInfo.fullName);
  }

}
