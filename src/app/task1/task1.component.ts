import { Component, OnInit } from '@angular/core';
import { Task1Service } from './shared/task1.service';
 
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  tasks=[];

  constructor(private task1Service :Task1Service) { }

  ngOnInit() {
    this.getTasks();
  }

   getTasks() {
     this.task1Service.getTask().subscribe(tasks=>this.tasks=tasks);
   }

}
