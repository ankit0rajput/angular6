import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authservice: AuthService, private _flashMessagesService: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  login(_login: NgModel): void {
    console.log(_login.value);
    this._authservice.login(_login.value)
      .subscribe(
        data => {
          console.log(data);
          //this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 2000 });
          if (data.responseCode == '200') {
            this._authservice.loggedIn.next(true);
            this._authservice.setUserLoggedIn();
            this.router.navigate(['/employeelist']);
          } else if (data.responseCode == '400') {
            this._flashMessagesService.show(data.responseMessage, { cssClass: 'alert-danger', timeout: 2000 });
          }
          //this._alertService.success('Registration successful', true);

          //this.router.navigate(['/asdf']);
          // this.router.navigate( [ 'Details', { id: company.id }] );
          //this.router.navigate(['/login']);
          return false;
        },
        error => {

        });
  }
}
