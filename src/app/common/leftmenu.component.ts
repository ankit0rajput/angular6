import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-leftmenu',
    templateUrl: './leftmenu.component.html',
})
export class LeftmenuComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    constructor(private authservice: AuthService) { }
    ngOnInit() {
        this.isLoggedIn$ = this.authservice.isLoggedIn;
    }

}