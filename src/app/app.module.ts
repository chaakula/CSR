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
import { AdminComponent } from './component/dashboard/admin/admin.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule ,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'user',
        component: HomeComponent
      },
      {
        path: 'user/:name',
        component: HomeComponent
      },
      
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: LoginComponent
      }
      
    ])
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
