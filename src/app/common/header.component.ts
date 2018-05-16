import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router, } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    constructor(private authService: AuthService, private router: Router) { }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    }


    logout() {
        this.authService.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

}