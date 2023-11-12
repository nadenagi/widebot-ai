import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/users';
import { RawUsers } from 'src/app/shared/types/user';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss',
})
export class AddEditUserComponent implements OnChanges {
  @Input('showAddEditUserModal') showAddEditUserModal: boolean = false;
  @Input('selectedUser') selectedUser!: RawUsers;
  @Output() closePopup = new EventEmitter();
  userForm!: FormGroup;

  constructor(private _user: UserService, private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.userForm = this.formBuilder.group({
      email: new FormControl(
        this.selectedUser?.email ?? '',
        Validators.required
      ),
      name: new FormControl(this.selectedUser?.name ?? '', Validators.required),
      username: new FormControl(
        this.selectedUser?.username ?? '',
        Validators.required
      ),
      phone: new FormControl(this.selectedUser?.phone ?? ''),
    });
  }

  closePopupfn() {
    this.userForm.reset();
    this.closePopup.emit();
  }

  updateUser() {
    let updatedUser: RawUsers = {...this.selectedUser, ...this.userForm.getRawValue()}
    this._user.updateUser(updatedUser);
    this.closePopup.emit();
  }

  addUser() {
    let newUser: RawUsers = {
      ...this.userForm.getRawValue(),
    };
    this._user.addUser(newUser);
    this.closePopup.emit();
  }
}
