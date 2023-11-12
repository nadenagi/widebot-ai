import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserActionsComponent,
    DeleteUserComponent,
    AddEditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
