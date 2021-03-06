import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: string;
  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    this._employeeservice.getEmployees().subscribe(
      data => {
        //console.log(data.data);
        this.employees = data.data;
      },
      error => {

      }
    );
  }
}
