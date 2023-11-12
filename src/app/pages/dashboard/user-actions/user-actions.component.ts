import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RawUsers } from 'src/app/shared/types/user';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.scss',
})
export class UserActionsComponent {
  @Input('selectedUser') selectedUser!: RawUsers;
  @Output() refreshList = new EventEmitter();
  deleteUserModal: boolean = false;
  showAddEditUserModal: boolean = false;

  closeModalsAndRefresh() {
    this.deleteUserModal = false;
    this.showAddEditUserModal = false;
    this.refreshList.emit();
  }
}
