import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/users';
import { RawUsers } from 'src/app/shared/types/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Output() refreshList = new EventEmitter();
  showAddEditUserModal: boolean = false;
  userSearch: string = '';
  users$: Observable<RawUsers[]> = new Observable();

  constructor(private _user: UserService) {
    this.users$ = _user.getUsers() as Observable<RawUsers[]>;
  }

  filterUsers(): void {
    this.users$ = this._user.getUsers(this.userSearch) as Observable<
      RawUsers[]
    >;
  }

  closeAddEditUser(){
    this.showAddEditUserModal = false;
    this.filterUsers();
  };

  ngOnInit(): void {}
}
