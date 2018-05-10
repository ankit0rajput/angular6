import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { LeftmenuComponent } from './common/leftmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employeelist', component: EmployeelistComponent },

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

    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
