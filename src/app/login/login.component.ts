import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(_login: NgModel): void {
    console.log(_login.value);
    this._authservice.login(_login.value)
      .subscribe(
        data => {
          //this._alertService.success('Registration successful', true);
          this.router.navigate(['/employeelist']);
          //this.router.navigate(['/asdf']);
          // this.router.navigate( [ 'Details', { id: company.id }] );
          return false;
        },
        error => {

        });
  }
}
