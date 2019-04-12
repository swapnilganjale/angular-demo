import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = {} as User;
  showSave: boolean = true;
  showEdit: boolean = true;
  hidepassword:boolean=true;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.getUser(id);
      this.showSave = false;
    } else {
      this.showEdit = false;
    }

  }


  getUser(id): void {
    this.hidepassword=false;
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  onSubmit() {
    let id = this.user.id;
    console.log(id);
    if (id) {
      console.log("onupdate");
      this.onUpdate();
    } else {
      console.log("onsave")
      this.OnSave();
    }
  }

  OnSave() {
    let us = new User(null,this.user.email,this.user.password, this.user.fullName, this.user.mobile,this.user.dob,this.user.gender);
    this.userService.saveUser(us).subscribe(user => {
      alert("saved");
      this.router.navigate(['users']);
    });
  }

  onUpdate() {
     this.userService.updateUser(this.user).subscribe(user => {
      alert("update");
      this.router.navigate(['users']);
    });
  }

}
