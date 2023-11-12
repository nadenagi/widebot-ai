import { Component, Input } from '@angular/core';
import { RawUsers } from 'src/app/shared/types/user';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.scss',
})
export class UserActionsComponent {
  @Input('selectedUser') selectedUser!: RawUsers;
  deleteUserModal: boolean = false;

  addUser() {}
  editUser() {}
  deleteUser() {   
    this.deleteUserModal = true;
  }
}
