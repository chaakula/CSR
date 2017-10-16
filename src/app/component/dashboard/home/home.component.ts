import { Component, OnInit, Input } from '@angular/core';
import { CustomerInfo, User } from '../../../model';
import { RegistrationService } from './../../../services/registration.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerInfo: CustomerInfo = new CustomerInfo();
  errorMessage: string;
  successMessage = false;
  users: User[];

  constructor(private registrationService: RegistrationService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.customerInfo = registrationService.getSelectedCust();
    });
  }

  ngOnInit() {

  }
  clear() {
    console.log("Clearing");
    this.customerInfo = new CustomerInfo();
  }
  evaluate() {
    this.registrationService.evaluate(this.customerInfo).subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
    this.topFunction();
    this.successMessage = true;
    this.run();
    this.clear();
  }

  topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

  public run() {
    var i = 0;
    var interval = setInterval(() => {
      if (++i === 4) {
        clearInterval(interval);
      }
      else {
        this.timer();
      }
    }, 5000);

  }

  public timer() {
    this.successMessage = false;
  }

}