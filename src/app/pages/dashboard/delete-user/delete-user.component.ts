import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RawUsers } from 'src/app/shared/types/user';
import { UserService } from 'src/app/services/users';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss',
})
export class DeleteUserComponent {
  @Input('showDeleteUserModal') showDeleteUserModal: boolean = false;
  @Input('selectedUser') selectedUser!: RawUsers;
  @Output() closeSideBar = new EventEmitter();

  constructor(private _user: UserService) {}

  closePopup() {
    this.closeSideBar.emit();
  }

  deleteUser() {
    this._user.deleteUser(this.selectedUser.id);
    this.closeSideBar.emit();
  }
}
