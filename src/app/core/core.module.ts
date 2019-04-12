import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './auth/login/login.component'
import { SignupComponent } from './auth/signup/signup.component'
import { AuthGuard } from '../core/services/auth.guard'
import { AuthService } from '../core/services/auth.service'
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { JwtService } from './services/jwt.service';
 
@NgModule({

  declarations: [
    LoginComponent,
    SignupComponent
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [ AuthGuard ,AuthService,JwtService]

})
export class CoreModule { }
