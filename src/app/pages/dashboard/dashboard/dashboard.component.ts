import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/users';
import { RawUsers } from 'src/app/shared/types/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userSearch: string = '';
  users$: Observable<RawUsers[]> = new Observable();

  constructor(private _user: UserService) {
    this.users$ = _user.getUsers() as Observable<RawUsers[]>;
  }

  ngOnInit(): void {}
}
