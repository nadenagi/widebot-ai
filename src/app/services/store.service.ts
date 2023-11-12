import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usersPredefinedCredentials } from '../shared/types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  logedInUser = new BehaviorSubject({});
  language = new BehaviorSubject('en');

  constructor(private router: Router) {}

  userLogin(user: usersPredefinedCredentials) {
    this.logedInUser.next(user);
  }
  logoutUser() {
    this.logedInUser.next({});
    this.router.navigateByUrl('/login');
  }
}
