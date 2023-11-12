import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent, ProfileDetailsComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule],
})
export class UserModule {}
