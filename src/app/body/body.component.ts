import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  rForm: FormGroup;
  loginForm:any;                     // A property for our submitted form
  password:string = '';
  userId:string = '';
  submitBtn:boolean = false;
  

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'userId': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'validate' : ''
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
    this.userId = loginForm.userId;
    this.password = loginForm.password;
    
    console.log(this.userId);
    console.log(this.password);
  }


}
