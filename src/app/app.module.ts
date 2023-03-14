import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component'
import { FormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { UserheadingComponent } from './components/userheading/userheading.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    HeaderComponent,
    LoginUserComponent,
    LoginAdminComponent,
    UserheadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
