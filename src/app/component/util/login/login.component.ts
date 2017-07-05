import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoginService } from '../../../services/util/login.service';
import {Router} from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  loginForm: any;                     // A property for our submitted form
  password: string = '';
  userId: string = '';
  submitBtn: boolean = false;
  //private commentsUrl = 'http://localhost:3000/api/users';

  constructor(private fb: FormBuilder, private http: Http,private loginService : LoginService,private router:Router) {

    this.rForm = fb.group({
      'userId': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'validate': ''
    });
    this.submitBtn = false;
  }

 ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        this.rForm.get('userId').setValidators([Validators.required, Validators.minLength(3)]);
        this.rForm.get('userId').updateValueAndValidity();
        this.rForm.get('password').setValidators([Validators.required, Validators.minLength(3)]);
        this.rForm.get('password').updateValueAndValidity();
      }
    )
    // https://api.myjson.com/bins/wdrv3  user data saved globally

  }

  onSignIn(loginForm) {
    let userName = this.loginService.getUserId();
    let userPassword = this.loginService.getUserId();
    
    if(loginForm.userId === userName && loginForm.password === userPassword){
      console.log('User authenticated');
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid Cridentials');
    }

  }


}
