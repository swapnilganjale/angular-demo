import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';

const userRoutes: Routes = [
  {path:'',component:UsersComponent},
  { path: 'addUser', component: UserEditComponent },
  { path: 'getUser/:id', component: UserEditComponent },
  { path: 'deleteUser/:id', component: UserListComponent },
  { path: 'refresh', component: UserListComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
