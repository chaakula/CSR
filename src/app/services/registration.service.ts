import { Injectable } from '@angular/core';
import { CustomerInfo } from '../model'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  private usersUrl = 'http://localhost:8080/getUserRegistrations';

  private evaluateUrl = 'http://localhost:8080/evaluate';

  private selectedCust: CustomerInfo;

  constructor(private http: Http) { }

  evaluate(customerInfo: CustomerInfo) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.evaluateUrl, customerInfo, options)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  private extractResponse(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body));
  }

  getUsers(): Observable<CustomerInfo[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body as CustomerInfo[];
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

  selectedCustomer(selectedCustomer){
    this.selectedCust = selectedCustomer;
  }
  clearSelection(){
    this.selectedCust = new CustomerInfo();
  }

  getSelectedCust(){
    return this.selectedCust;
  }

}
