import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModule { }
