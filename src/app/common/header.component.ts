import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    constructor(private authService: AuthService) { }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    }

}