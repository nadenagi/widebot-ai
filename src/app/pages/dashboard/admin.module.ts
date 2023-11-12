import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [DashboardComponent, UserActionsComponent, DeleteUserComponent],
  imports: [CommonModule, FormsModule, AdminModuleRoutingModule],
})
export class AdminModule {}
