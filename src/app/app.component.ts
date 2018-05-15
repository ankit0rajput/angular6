import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn$: Observable<boolean>;
  constructor(private authservice: AuthService) { }
  ngOnInit() {
    this.isLoggedIn$ = this.authservice.isLoggedIn; // {2} 
  }
}
