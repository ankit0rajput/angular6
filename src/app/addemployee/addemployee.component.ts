import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../addemployee/employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employee: Employee[];
  constructor(private _employeeservice: EmployeeService, public _flashMessagesService: FlashMessagesService, private router: Router) { }
  private fileSelected: File = null;
  ngOnInit() {
  }
  onFileSelected(event) {
    // console.log(event);
    this.fileSelected = <File>event.target.files[0];
  }
  addemployee(employeeForm) {
    let formData: FormData = new FormData();
    formData.append('image', this.fileSelected);
    for (let key in employeeForm.value) {
      formData.append(key, employeeForm.value[key]);
    }

    if (formData) {

      //console.log(formData.get('image'));
      this._employeeservice.addemployee(formData).subscribe(
        data => {
          console.log(data);
          if (data.responseCode == '200') {
            this._flashMessagesService.show(data.responseMessage, { cssClass: 'alert-danger', timeout: 2000 });
            this.router.navigate(['/employeelist']);
          } else if (data.responseCode == '400') {

          }
          return false;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });
    }
  }
}
