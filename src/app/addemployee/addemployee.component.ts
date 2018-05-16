import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private _employeeservice: EmployeeService, public _flashMessagesService: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }
  addemployee(employeeForm) {
    console.log(employeeForm.value);
    this._employeeservice.addemployee(employeeForm.value).subscribe(
      data => {
        console.log(data);
        if (data.responseCode == '200') {
          // this._flashMessagesService.show(data.responseMessage, { cssClass: 'alert-danger', timeout: 2000 });
          this.router.navigate(['/employeelist']);
        } else if (data.responseCode == '400') {

        }
        return false;
      },
      error => {

      });
  }
}
