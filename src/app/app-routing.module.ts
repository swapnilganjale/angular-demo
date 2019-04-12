import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/services/auth.guard';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';

const appRoutes: Routes = [

  {
    path: '',
    canActivate: [AuthGuard],
    component: HomelayoutComponent,
    children: [{
      path: 'users',
      canActivate: [AuthGuard],
      loadChildren: './users/users.module#UsersModule'
    },
    {
      path: 'dashboard',
      canActivate: [AuthGuard],
      component: DashboardComponent
    },
    {
      path: 'task1',
      canActivate: [AuthGuard],
      loadChildren: './task1/task1.module#Task1Module'
    }]
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
