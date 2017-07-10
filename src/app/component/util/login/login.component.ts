import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoginService } from '../../../services/util/login.service';
import { Router } from '@angular/router';
import { User } from '../../../model/users'

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User("", "");
  errorMessage: string;
  users: User[];

  constructor(private http: Http, private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.loginService.getUsers()
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }

  onLogin() {
    for (let user of this.users) {
      if (this.user.userid === user.userid && this.user.password === user.password) {
        this.router.navigate(['/home']);
      } else {
        console.log('Invalid Cridentials');
      }
    }

  }

}
