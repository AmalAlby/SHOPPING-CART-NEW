import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { AdmnavbarComponent } from './admnavbar/admnavbar.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserviewComponent } from './userview/userview.component';

const myroute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addp",
    component:AddproductComponent
  },
  {
    path:"viewp",
    component:ViewproductComponent
  },
  {
    path:"ulogin",
    component:UserloginComponent
  },
  {
    path:"ureg",
    component:UserregComponent
  },
  {
    path:"searchp",
    component:SearchproductComponent
  },
  {
    path:"uview",
    component:UserviewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddproductComponent,
    ViewproductComponent,
    SearchproductComponent,
    AdmnavbarComponent,
    UserloginComponent,
    UserregComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
