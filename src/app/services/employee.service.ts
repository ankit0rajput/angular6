import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Employee } from '../addemployee/employee';
import { ListEmployee } from '../employeelist/listemployee';
import { TransferState } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http, private _httpClient: HttpClient) { }


    private apiUrl = "http://localhost/angular6_api/webservices/";


    addemployee(formData: FormData): Observable<Employee> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/form-data');

        return this._httpClient.post(this.apiUrl + 'employee/add', formData)
            .map((response: Response) => <Employee>response.json());

    }


    getEmployees(): Observable<ListEmployee> {
        return this._http.get(this.apiUrl + 'employee/fetch_all')
            .map((response: Response) => <ListEmployee>response.json());

    }

}