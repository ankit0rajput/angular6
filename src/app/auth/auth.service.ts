

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from '../login/user';
import { TransferState } from '@angular/platform-browser';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false); // {1}
  public isUserLoggedIn;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  private apiUrl = "http://localhost/angular6_api/webservices/";

  // saveEmployee():Observable<CEmployee[]> {
  login(loginForm: User): Observable<User[]> {
    console.log(loginForm);


    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // this.loggedIn.next(true);

    return this._http.post(this.apiUrl + 'login/', loginForm, {
      headers: headers
    }).map((response: Response) => <User[]>response.json());

  }


}