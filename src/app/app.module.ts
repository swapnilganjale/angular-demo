import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomelayoutComponent} from './layout/homelayout/homelayout.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { Task1Module } from './task1/task1.module';
import { HttpTokenInterceptor } from './core/services/http.token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    Task1Module
  ],
  providers: [{  provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
