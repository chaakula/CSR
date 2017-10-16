import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../../../services/registration.service';
import { CustomerInfo,User } from '../../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customerInfos: CustomerInfo[];
  errorMessage: string;
  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.registrationService.getUsers().subscribe(
      customerInfos => this.customerInfos = customerInfos,
      error => this.errorMessage = <any>error)
  }

  selectedRow(custInfo:CustomerInfo){
    this.registrationService.selectedCustomer(custInfo);
    this.router.navigate(['/user', custInfo.userRegistration.name]);
  }

}
