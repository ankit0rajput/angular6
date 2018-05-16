import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Employee } from '../addemployee/employee';
import { TransferState } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }


    private apiUrl = "http://localhost/angular6_api/webservices/";


    addemployee(employeeForm: Employee): Observable<Employee[]> {
        console.log(employeeForm);


        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // this.loggedIn.next(true);

        return this._http.post(this.apiUrl + 'employee/add', employeeForm, {
            headers: headers
        }).map((response: Response) => <Employee[]>response.json());

    }


    getEmployees(): Observable<Employee[]> {
        return this._http.get(this.apiUrl + 'employee/fetch_all')
            .map((response: Response) => <Employee[]>response.json());

    }

}