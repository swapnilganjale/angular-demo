import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './directives/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [AlertComponent],
  providers:[AlertService]
})
export class SharedModule { }
