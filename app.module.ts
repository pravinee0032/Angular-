import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { KeydemoComponent } from './keydemo/keydemo.component';

import { MousedemoComponent } from './mousedemo/mousedemo.component';
import { MousedownComponent } from './mousedown/mousedown.component';
import { ChangedemoComponent } from './changedemo/changedemo.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { PipesComponent } from './pipes/pipes.component';

import { Sentencecase1Pipe } from './sentencecase1.pipe';
import {CaptchaService } from './captcha.service';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    InlinestyleComponent,
    KeydemoComponent,
   
    MousedemoComponent,
   
    MousedownComponent,
   
    ChangedemoComponent,
   
    FilterComponent,
   
    ProductsComponent,
   
    PipesComponent,
  
    Sentencecase1Pipe,
  
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CaptchaService],
  bootstrap: [ LoginComponent]
})
export class AppModule { }