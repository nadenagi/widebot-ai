import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { usersPredefinedCredentials } from 'src/app/shared/types/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnDestroy {
  @Output() editProfile = new EventEmitter();
  constructor(private _store: StoreService) {}
  loggedInUser!: usersPredefinedCredentials;
  loggedInUserSubscription = this._store.logedInUser.subscribe(
    (data) => (this.loggedInUser = data)
  );

  ngOnDestroy() {
    this.loggedInUserSubscription.unsubscribe();
  }

  editProfilefn(){
    this.editProfile.emit()
  };
}
