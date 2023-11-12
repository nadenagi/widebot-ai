import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/users';
import { RawUsers, usersPredefinedCredentials } from 'src/app/shared/types/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent implements OnDestroy, OnInit {
  @Output() cancelEdit = new EventEmitter();

  userForm!: FormGroup;
  selectedUser!: usersPredefinedCredentials;
  loggedInUserSubscriprion = new Subscription();
  constructor(private _store: StoreService, private formBuilder: FormBuilder, private _user: UserService) {
    this.loggedInUserSubscriprion = _store.logedInUser.subscribe(
      (data) => (this.selectedUser = data)
    );
  }

  ngOnInit() {
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

  ngOnDestroy(): void {
    this.loggedInUserSubscriprion.unsubscribe();
  }

  updateUser() {
    let updatedUser: RawUsers = {
      ...this.selectedUser,
      ...this.userForm.getRawValue(),
    };
    this._user.updateUser(updatedUser);
    this.cancelEdit.emit();
  }

  cancelEditUser() {
    this.cancelEdit.emit()
  }
}
