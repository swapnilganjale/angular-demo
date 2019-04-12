import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { Task1Service } from './shared/task1.service';
import { Addtask1Component } from './addtask1/addtask1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Task1Component, Addtask1Component],
  imports: [
    FormsModule,
    CommonModule,
    Task1RoutingModule
  ],
  providers:[Task1Service]
})
export class Task1Module { }
