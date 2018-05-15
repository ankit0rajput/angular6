import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
})
export class FooterComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;

    constructor(private authservice: AuthService) { }
    ngOnInit() {
        this.isLoggedIn$ = this.authservice.isLoggedIn;
    }
}