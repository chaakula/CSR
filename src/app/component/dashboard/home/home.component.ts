import { Component, OnInit } from '@angular/core';
import { CustomerInfo,User } from '../../../model';
import { RegistrationService } from './../../../services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerInfo: CustomerInfo = new CustomerInfo();
  errorMessage: string;
  users: User[];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
   
  }
  evaluate() {
    this.registrationService.evaluate(this.customerInfo).subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
      alert("User details submitted for evaluation.");
      console.log(this.customerInfo.userRegistration.name);
  }

}
