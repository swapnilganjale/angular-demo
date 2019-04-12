 import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import {UserListComponent} from './user-list/user-list.component'
import {UserService} from './shared/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { User } from './shared/user.model';
import { CustomHttpInterceptor } from './shared/CustomHttpInterceptor';

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UsersComponent
   ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    UsersRoutingModule
  ],
   exports:[],
  providers: [UserService ,{  provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },]
 })
export class UsersModule { }
