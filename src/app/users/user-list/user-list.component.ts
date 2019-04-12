import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  users = [];

  ngOnInit() {
    this.onUsersGet();
  }

  onUsersGet() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onDelete(user:any) {
    this.userService.deleteUser(user).subscribe();
    this.router.navigate(['users/refresh']);
    alert("deleted..")
  }


}
