

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from '../login/user';
import { TransferState } from '@angular/platform-browser';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  constructor(private _http: Http) {

  }
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  private apiUrl = "http://localhost/angular6_api/";

  // saveEmployee():Observable<CEmployee[]> {
  login(loginForm: User): Observable<User[]> {
    // console.log(empForm);


    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.loggedIn.next(true);

    return this._http.post(this.apiUrl + 'auth/login/', loginForm, {
      headers: headers
    }).map((response: Response) => <User[]>response.json());

  }

}