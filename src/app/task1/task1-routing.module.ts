import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task1Component } from './task1.component';
import { Addtask1Component } from './addtask1/addtask1.component';

const routes: Routes = [
    {path:'',component:Task1Component},
    {path:'addtask',component:Addtask1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task1RoutingModule { }
