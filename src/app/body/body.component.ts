import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
/*import { Users } from '../model/users';*/

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
  private commentsUrl = 'http://localhost:3000/api/users';

  constructor(private fb: FormBuilder,private http: Http) {

    this.rForm = fb.group({
      'userId': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'validate' : ''
    });
    this.submitBtn = false;
  }

   getUsers(){
         // ...using get request
        var resp = this.http.get('https://api.myjson.com/bins/wdrv3').map((res:Response) => res.json());
         var bodyString = JSON.stringify(resp);
        console.log(bodyString);
        return resp;
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

    this.getUsers();

  }


}
