import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { LeftmenuComponent } from './common/leftmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthgaurdGuard } from './authgaurd.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employeelist', canActivate: [AuthgaurdGuard], component: EmployeelistComponent },

  /*{path:'',component:LoginComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,

    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,

    EmployeelistComponent,

    DashboardComponent,

    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
  ],
  providers: [AuthService, FlashMessagesService, AuthgaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
