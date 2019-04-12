import { Component, OnInit } from '@angular/core';
import { Task1Service } from '../shared/task1.service';
import { Task1 } from '../shared/task1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask1',
  templateUrl: './addtask1.component.html',
  styleUrls: ['./addtask1.component.css']
})
export class Addtask1Component implements OnInit {
  task1 = {} as Task1;

  constructor(private task1Service :Task1Service, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.task1Service.addTask1(this.task1).subscribe(task=>{
       alert("task added");
       this.router.navigate(['task1']);
    });
   }


}
