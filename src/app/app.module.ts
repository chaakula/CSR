import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/util/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/dashboard/home/home.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule ,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: LoginComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
